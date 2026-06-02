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
    var h = window.location.hostname;
    return (h.indexOf('vercel') !== -1 || this._isLocal()) ? '' : 'https://sidiptv.vercel.app';
  }

  async _fetch(url, mac, token) {
    var proxy = this._proxyUrl();
    var fullUrl = proxy + '/api/stalker/proxy?url=' + encodeURIComponent(url) + '&mac=' + encodeURIComponent(mac || this.mac);
    if (token) fullUrl += '&token=' + encodeURIComponent(token);
    var resp = await fetch(fullUrl);
    if (!resp.ok) throw new Error('HTTP ' + resp.status);
    return resp;
  }

  /* Build URL manually to avoid encoding cmd param */
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
        var testUrl = this._buildUrl(c, { type: 'stb', prehash: sha1(this.mac.toUpperCase()).toUpperCase(), action: 'handshake', JsHttpRequest: '1-xml' });
        var text = await (await this._fetch(testUrl, this.mac)).text();
        var data = JSON.parse(text);
        var token = (data.js && data.js.token) || data.token;
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
    var url = this._buildUrl(this.portalUrl, params);
    this.requestCount++;
    var resp = await this._fetch(url, this.mac, this.token);
    var text = await resp.text();
    try { return JSON.parse(text); }
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

  async getChannels(genreId) {
    var all = [], page = 1, hasMore = true;
    while (hasMore) {
      var params = { type: 'itv', force_ch_link_check: '0', sortby: 'number', p: String(page) };
      if (genreId && genreId !== 'all') { params.genre = genreId; params.category = genreId; }
      else { params.genre = '*'; params.category = '*'; }
      try {
        var data = await this._request('get_ordered_list', params);
        if (data && data.js) {
          var list = Array.isArray(data.js) ? data.js : (data.js.data || []);
          for (var ch of list) all.push(ch);
          var total = Number(data.js.total_items || data.total_items) || 0;
          var max = Number(data.js.max_page_items || data.max_page_items) || list.length;
          hasMore = page < (max > 0 ? Math.ceil(total / max) : 1) && list.length > 0;
          page++;
          if (page > 20) hasMore = false;
        } else hasMore = false;
      } catch(e) {
        console.log('[Stalker] getChannels page fetch error:', e.message);
        hasMore = false;
      }
    }
    console.log('[Stalker] getChannels total:', all.length);
    return all.map(function(ch) {
      return { id: ch.id, number: ch.number, name: ch.name, url: ch.cmd, logo: ch.logo || ch.logo_src || ch.tv_logo, genre_id: ch.tv_genre_id };
    });
  }

  async getVodCategories(type) {
    var data = await this._request('get_categories', { type: type || 'vod' });
    if (data && data.js) return Array.isArray(data.js) ? data.js : (data.js.data || []);
    return [];
  }

  async getVodList(categoryId, type) {
    var all = [], page = 1, hasMore = true;
    while (hasMore) {
      var params = { type: type || 'vod', p: String(page) };
      if (categoryId && categoryId !== 'all') params.category = categoryId;
      try {
        var data = await this._request('get_ordered_list', params);
        if (data && data.js) {
          var list = Array.isArray(data.js) ? data.js : (data.js.data || []);
          for (var m of list) all.push(m);
          var total = Number(data.js.total_items || data.total_items) || 0;
          var max = Number(data.js.max_page_items || data.max_page_items) || list.length;
          hasMore = page < (max > 0 ? Math.ceil(total / max) : 1) && list.length > 0;
          page++;
          if (page > 20) hasMore = false;
        } else hasMore = false;
      } catch(e) {
        console.log('[Stalker] getVodList page fetch error:', e.message);
        hasMore = false;
      }
    }
    return all.map(function(m) {
      return { id: m.id, name: m.name, url: m.cmd, logo: m.screenshot_uri || m.logo, description: m.description, year: m.year, genres: m.genres_str };
    });
  }

  async createLink(cmd) {
    function stripPrefix(s) {
      var m = s.match(/^(?:ffmpeg|auto|ffrt|ff)\s+(.+)/i);
      return m ? m[1].trim() : s.trim();
    }
    function rewriteLocalhost(s, portal) {
      if (s.indexOf('localhost') === -1 && s.indexOf('127.0.0.1') === -1) return s;
      try {
        var pu = new URL(portal);
        s = s.replace(/\/\/localhost(:\d+)?/gi, '//' + pu.hostname + (pu.port ? ':' + pu.port : ''));
        s = s.replace(/\/\/127\.0\.0\.1(:\d+)?/gi, '//' + pu.hostname + (pu.port ? ':' + pu.port : ''));
      } catch(e) {}
      return s;
    }
    var cleaned = stripPrefix(cmd);
    /* Always call create_link even for HTTP URLs - portal needs it for token/stream URL */
    try {
      var params = { type: 'itv', cmd: cleaned, disable_ad: '0', download: '0' };
      var url = this._buildUrl(this.portalUrl, { action: 'create_link', JsHttpRequest: '1-xml', mac: this.mac });
      for (var k in params) {
        if (params.hasOwnProperty(k)) {
          url += '&' + k + '=' + (k === 'cmd' ? params[k] : encodeURIComponent(params[k]));
        }
      }
      this.requestCount++;
      var resp = await this._fetch(url, this.mac, this.token);
      var text = await resp.text();
      var data = JSON.parse(text);
      if (data && data.js && data.js.cmd) {
        return stripPrefix(rewriteLocalhost(data.js.cmd, this.portalUrl));
      }
      if (data && data.cmd) return stripPrefix(rewriteLocalhost(data.cmd, this.portalUrl));
    } catch(e) {}
    return cleaned;
  }
}
