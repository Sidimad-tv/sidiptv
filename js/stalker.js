/* SHA1 implementation for prehash */
function sha1(str) {
  function rotl(n,b){return(n<<b)|(n>>>(32-b))}
  function toHex(n){var h='';for(var i=7;i>=0;i--)h+='0123456789abcdef'.charAt((n>>>(i*4))&15);return h}
  str=unescape(encodeURIComponent(str));
  var words=[],i,bl=((str.length+8)>>6)+1;for(i=0;i<bl*16;i++)words[i]=0;
  for(i=0;i<str.length;i++)words[i>>2]|=str.charCodeAt(i)<<(24-(i%4)*8);
  words[i>>2]|=128<<(24-(i%4)*8);words[bl*16-1]=str.length*8;
  var h0=0x67452301,h1=0xEFCDAB89,h2=0x98BADCFE,h3=0x10325476,h4=0xC3D2E1F0;
  for(i=0;i<words.length;i+=16){
    var a=h0,b=h1,c=h2,d=h3,e=h4,w=words.slice(i,i+16),f,k,t;
    for(var j=0;j<80;j++){
      if(j>=16){t=w[j-3]^w[j-8]^w[j-14]^w[j-16];w[j]=rotl(t,1)}
      if(j<20){f=(b&c)|((~b)&d);k=0x5A827999}
      else if(j<40){f=b^c^d;k=0x6ED9EBA1}
      else if(j<60){f=(b&c)|(b&d)|(c&d);k=0x8F1BBCDC}
      else{f=b^c^d;k=0xCA62C1D6}
      t=rotl(a,5)+f+e+k+w[j];e=d;d=c;c=rotl(b,30);b=a;a=t;
    }
    h0+=a;h1+=b;h2+=c;h3+=d;h4+=e;
  }
  return toHex(h0)+toHex(h1)+toHex(h2)+toHex(h3)+toHex(h4);
}

class StalkerClient {
  constructor(portalUrl, mac) {
    this.rawUrl = portalUrl.replace(/\/+$/, '');
    this.portalUrl = this.rawUrl;
    this.mac = mac;
    this.token = null;
    this.random = null;
    this.requestCount = 0;
  }

  _isLocal() {
    var h = window.location.hostname;
    return h === 'localhost' || h === '127.0.0.1';
  }

  _proxyUrl() {
    if (this._isLocal()) return '';
    return window.location.origin;
  }

  _buildUrl(base, params) {
    var url = base;
    var sep = base.indexOf('?') === -1 ? '?' : '&';
    for (var k in params) {
      if (params.hasOwnProperty(k)) {
        url += sep + k + '=' + (k === 'cmd' ? params[k] : encodeURIComponent(params[k]));
        sep = '&';
      }
    }
    return url;
  }

  async _fetch(baseUrl, params, mac, token) {
    var origin = this._isLocal() ? '' : window.location.origin;
    var q = 'url=' + encodeURIComponent(baseUrl);
    if (mac) q += '&macAddress=' + encodeURIComponent(mac);
    if (token) q += '&token=' + encodeURIComponent(token);
    if (params) {
      for (var k in params) {
        if (params.hasOwnProperty(k)) {
          q += '&' + k + '=' + (k === 'cmd' ? encodeURIComponent(params[k]) : encodeURIComponent(params[k]));
        }
      }
    }
    var resp = await fetch(origin + '/api/stalker?' + q);
    if (!resp.ok) throw new Error('HTTP ' + resp.status);
    return resp;
  }

  async _resolveBase() {
    if (this.rawUrl.match(/\/[^/]+\.php$/)) { this.portalUrl = this.rawUrl; return; }

    var u = new URL(this.rawUrl);
    var origin = u.origin;
    var path = u.pathname.replace(/\/+$/, '') || '';

    var candidates = [];
    if (path) {
      candidates.push(origin + path + '/server/load.php');
      candidates.push(origin + path + '/portal.php');
      candidates.push(origin + path + '/load.php');
      candidates.push(origin + path + '/c/portal.php');
    }
    candidates.push(origin + '/server/load.php');
    candidates.push(origin + '/portal.php');
    candidates.push(origin + '/stalker_portal/server/load.php');
    candidates.push(origin + '/c/portal.php');

    var seen = {}, uniq = [];
    for (var c of candidates) { if (!seen[c]) { seen[c] = true; uniq.push(c); } }

    for (var c of uniq) {
      try {
        var text = await (await this._fetch(c, { type: 'stb', prehash: sha1(this.mac.toUpperCase()).toUpperCase(), action: 'handshake', JsHttpRequest: '1-xml' }, this.mac)).text();
        var data = JSON.parse(text);
        var inner = data.payload || data;
        var token = (inner.js && inner.js.token) || inner.token;
        if (token) { console.log('[Stalker] Base resolved:', c); this.portalUrl = c; return; }
      } catch(e) {}
    }
    this.portalUrl = this.rawUrl + '/server/load.php';
  }

  async _request(action, extraParams) {
    var params = { action: action, JsHttpRequest: '1-xml' };
    params.mac = this.mac;
    if (extraParams) {
      for (var k in extraParams) {
        if (extraParams.hasOwnProperty(k)) params[k] = extraParams[k];
      }
    }
    this.requestCount++;
    var resp = await this._fetch(this.portalUrl, params, this.mac, this.token);
    var text = await resp.text();
    try { var d = JSON.parse(text); return d.payload || d; }
    catch(e) { return { js: text }; }
  }

  async authenticate() {
    await this._resolveBase();

    /* Handshake with prehash (SHA1 of MAC uppercase) */
    var prehash = sha1(this.mac.toUpperCase()).toUpperCase();
    var handshake = await this._request('handshake', { type: 'stb', prehash: prehash });
    if (handshake && handshake.js && handshake.js.token) {
      this.token = handshake.js.token;
      this.random = handshake.js.random || '';
    } else {
      throw new Error('Failed to get token');
    }

    /* Get profile with auth_second_step */
    try {
      await this._request('get_profile', {
        type: 'stb', hd: '1', auth_second_step: '1', not_valid_token: '0', video_out: 'hdmi',
        num_banks: '2', stb_type: '', sn: this.mac.replace(/:/g, '').toLowerCase(),
        device_id: this.mac.replace(/:/g, '').toLowerCase() + '0000',
        device_id2: '0000' + this.mac.replace(/:/g, '').toLowerCase(),
        signature: this.mac.replace(/:/g, '').toLowerCase(),
      });
    } catch(e) {}

    return { success: true };
  }

  async getGenres() {
    var data = await this._request('get_genres', { type: 'itv' });
    if (data && data.js) return Array.isArray(data.js) ? data.js : (data.js.data || []);
    return [];
  }

  async _fetchAllPages(action, params, pageKey, totalKey, maxKey) {
    pageKey = pageKey || 'p';
    totalKey = totalKey || 'total_items';
    maxKey = maxKey || 'max_page_items';

    /* First page to get total count */
    var firstParams = {};
    for (var k in params) firstParams[k] = params[k];
    firstParams[pageKey] = '1';
    var first = await this._request(action, firstParams);
    var all = [];
    if (!first || !first.js) return all;
    var firstList = Array.isArray(first.js) ? first.js : (first.js.data || []);
    for (var i of firstList) all.push(i);
    if (!firstList.length) return all;

    var total = Number(first.js[totalKey] || first[totalKey]) || 0;
    var perPage = Number(first.js[maxKey] || first[maxKey]) || firstList.length;
    if (perPage <= 0) perPage = firstList.length;
    var totalPages = total > 0 ? Math.ceil(total / perPage) : 1;

    /* If only 1 page, we're done */
    if (totalPages <= 1) return all;

    /* Sequential pagination with delay between requests to avoid portal overload */
    for (var p = 2; p <= totalPages; p++) {
      var pParams = {};
      for (var k in params) pParams[k] = params[k];
      pParams[pageKey] = String(p);
      try {
        var data = await this._request(action, pParams);
        if (data && data.js) {
          var list = Array.isArray(data.js) ? data.js : (data.js.data || []);
          for (var i of list) all.push(i);
          if (!list.length) break;
        } else break;
      } catch(e) { break; }
    }

    return all;
  }

  async getChannels(genreId) {
    var params = { type: 'itv', force_ch_link_check: '0', sortby: 'number' };
    if (genreId && genreId !== 'all') { params.genre = genreId; params.category = genreId; }
    else { params.genre = '*'; params.category = '*'; }
    var all = await this._fetchAllPages('get_ordered_list', params);
    console.log('[Stalker] getChannels total:', all.length);
    return all.map(function(ch) {
      return { id: ch.id, number: ch.number, name: ch.name, url: ch.cmd, logo: ch.logo || ch.logo_src || ch.tv_logo, genre_id: ch.tv_genre_id };
    });
  }

  async getVodInfo(id, type) {
    var data = await this._request('get_vod_info', { video_id: String(id), type: type || 'vod' });
    if (data && data.js) return data.js;
    return null;
  }

  async getVodCategories(type) {
    var data = await this._request('get_categories', { type: type || 'vod' });
    if (data && data.js) return Array.isArray(data.js) ? data.js : (data.js.data || []);
    return [];
  }

  async getVodList(categoryId, type) {
    var params = { type: type || 'vod' };
    if (categoryId && categoryId !== 'all') params.category = categoryId;
    var all = await this._fetchAllPages('get_ordered_list', params);
    return all.map(function(m) {
      return { id: m.id, name: m.name, url: m.cmd, logo: m.screenshot_uri || m.logo, description: m.description, year: m.year, genres: m.genres_str };
    });
  }

  async getSeasonEpisodes(seriesId, seasonNum) {
    var data = await this._request('get_ordered_list', {
      type: 'series', video_id: String(seriesId), season: String(seasonNum), p: '1',
    });
    if (data && data.js) {
      var list = Array.isArray(data.js) ? data.js : (data.js.data || []);
      return list.map(function(ep) {
        return { id: ep.id, name: ep.name, url: ep.cmd, logo: ep.screenshot_uri || ep.logo, season: seasonNum, episode: ep.series || ep.number || '' };
      });
    }
    return [];
  }

  async createLink(cmd, itemType) {
    function stripPrefix(s) {
      if (!s) return '';
      var m = s.match(/^(?:ffmpeg|auto|ffrt|ff)\s+(.+)/i);
      return m ? m[1].trim() : s.trim();
    }
    function rewriteLocalhost(s, portal) {
      if (!s) return s;
      if (s.indexOf('localhost') === -1 && s.indexOf('127.0.0.1') === -1) return s;
      try {
        var pu = new URL(portal);
        s = s.replace(/\/\/localhost(:\d+)?/gi, '//' + pu.hostname + (pu.port ? ':' + pu.port : ''));
        s = s.replace(/\/\/127\.0\.0\.1(:\d+)?/gi, '//' + pu.hostname + (pu.port ? ':' + pu.port : ''));
      } catch(e) {}
      return s;
    }
    var cleaned = stripPrefix(cmd);
    if (!cleaned) return '';
    /* If it already a full HTTP URL, try create_link but fall back quickly */
    try {
      var reqParams = { action: 'create_link', JsHttpRequest: '1-xml', mac: this.mac, type: itemType || 'itv', cmd: cleaned, disable_ad: '0', download: '0' };
      this.requestCount++;
      var resp = await this._fetch(this.portalUrl, reqParams, this.mac, this.token);
      var text = await resp.text();
      var data = JSON.parse(text);
      var inner = data.payload || data;
      if (inner && inner.js && inner.js.cmd) {
        var result = stripPrefix(rewriteLocalhost(inner.js.cmd, this.portalUrl));
        if (result) return result;
      }
      if (inner && inner.cmd) {
        var result = stripPrefix(rewriteLocalhost(inner.cmd, this.portalUrl));
        if (result) return result;
      }
    } catch(e) {}
    /* Fallback: if cmd is already a URL, use it directly */
    if (cleaned.indexOf('http://') === 0 || cleaned.indexOf('https://') === 0) return cleaned;
    /* Try constructing from portal base */
    try {
      var pu = new URL(this.portalUrl);
      var base = pu.origin + pu.pathname.substring(0, pu.pathname.lastIndexOf('/') + 1);
      return base + cleaned;
    } catch(e) {}
    return cleaned;
  }
}
