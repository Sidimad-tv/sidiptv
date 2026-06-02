class StalkerClient {
  constructor(portalUrl, mac) {
    this.rawUrl = portalUrl.replace(/\/+$/, '');
    this.portalUrl = this.rawUrl;
    this.mac = mac;
    this.token = null;
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
        var testUrl = c + '?type=stb&prehash=0&action=handshake';
        var resp = await this._fetch(testUrl, this.mac);
        var text = await resp.text();
        console.log('[Stalker] Trying base:', c, '- response:', text.slice(0,200));
        var data = JSON.parse(text);
        var token = (data.js && data.js.token) || data.token;
        if (token) { console.log('[Stalker] Base resolved:', c); this.portalUrl = c; return; }
      } catch(e) { console.log('[Stalker] Base failed:', c, e.message); }
    }
    console.log('[Stalker] Using fallback base');
    this.portalUrl = this.rawUrl + '/server/load.php';
  }

  async _request(action, extraParams) {
    var u = new URL(this.portalUrl);
    var params = { action: action };
    if (extraParams) {
      for (var k in extraParams) {
        if (extraParams.hasOwnProperty(k)) params[k] = extraParams[k];
      }
    }
    params.mac = this.mac;
    for (var k in params) {
      if (params.hasOwnProperty(k)) u.searchParams.set(k, params[k]);
    }

    this.requestCount++;
    var resp = await this._fetch(u.toString(), this.mac, this.token);
    var text = await resp.text();
    try { return JSON.parse(text); }
    catch(e) { return { js: text }; }
  }
    }
    for (var k in params) {
      if (params.hasOwnProperty(k)) u.searchParams.set(k, params[k]);
    }

    this.requestCount++;
    var resp = await this._fetch(u.toString(), this.mac, this.token);
    var text = await resp.text();
    try { return JSON.parse(text); }
    catch(e) { return { js: text }; }
  }

  async authenticate() {
    await this._resolveBase();
    var handshake = await this._request('handshake', { type: 'stb', prehash: '0' });
    if (handshake && handshake.js && handshake.js.token) {
      this.token = handshake.js.token;
    } else {
      throw new Error('Failed to get token');
    }
    try { await this._request('get_profile', { type: 'stb' }); } catch(e) {}
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
      var params = { type: 'itv', force_ch_link_check: 0, sortby: 'number', p: page };
      if (genreId && genreId !== 'all') params.genre = genreId;
      var data = await this._request('get_ordered_list', params);
      console.log('[Stalker] getChannels page', page, ':', data && data.js ? 'has js' : 'no js', data && data.total_items ? data.total_items + ' total' : '');
      if (data && data.js) {
        var list = Array.isArray(data.js) ? data.js : (data.js.data || []);
        console.log('[Stalker] getChannels got', list.length, 'items on page', page);
        for (var ch of list) all.push(ch);
        var total = Number(data.total_items) || 0;
        var max = Number(data.max_page_items) || list.length;
        hasMore = page < (max > 0 ? Math.ceil(total / max) : 1) && list.length > 0;
        page++;
        if (page > 20) hasMore = false;
      } else { console.log('[Stalker] getChannels: no data.js', data); hasMore = false; }
    }
    console.log('[Stalker] getChannels total:', all.length);
    return all.map(function(ch) {
      return { id: ch.id, number: ch.number, name: ch.name, url: ch.cmd, logo: ch.logo || ch.logo_src || ch.tv_logo, genre_id: ch.tv_genre_id };
    });
  }

  async getVodCategories(type) {
    var data = await this._request('get_genres', { type: type || 'vod' });
    if (data && data.js) return Array.isArray(data.js) ? data.js : (data.js.data || []);
    return [];
  }

  async getVodList(categoryId, type) {
    var all = [], page = 1, hasMore = true;
    while (hasMore) {
      var params = { type: type || 'vod', p: page };
      if (categoryId && categoryId !== 'all') params.category = categoryId;
      var data = await this._request('get_ordered_list', params);
      if (data && data.js) {
        var list = Array.isArray(data.js) ? data.js : (data.js.data || []);
        for (var m of list) all.push(m);
        var total = Number(data.total_items) || 0;
        var max = Number(data.max_page_items) || list.length;
        hasMore = page < (max > 0 ? Math.ceil(total / max) : 1) && list.length > 0;
        page++;
        if (page > 20) hasMore = false;
      } else hasMore = false;
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
    if (cleaned.indexOf('http://') === 0 || cleaned.indexOf('https://') === 0) {
      return rewriteLocalhost(cleaned, this.portalUrl);
    }
    try {
      var data = await this._request('create_link', { type: 'itv', cmd: cleaned, forced_storage: '0', disable_ad: '0', download: '0', force: '1', play_token: '', cache: '1' });
      if (data && data.js && data.js.cmd) {
        return stripPrefix(rewriteLocalhost(data.js.cmd, this.portalUrl));
      }
      if (data && data.cmd) return stripPrefix(rewriteLocalhost(data.cmd, this.portalUrl));
    } catch(e) {}
    return cleaned;
  }
}
