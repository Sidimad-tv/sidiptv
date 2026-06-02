class XtreamClient {
  constructor(server, username, password) {
    this.server = server.replace(/\/+$/, '');
    this.username = username;
    this.password = password;
    this.baseUrl = this.server + '/player_api.php?username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password);
  }

  _isLocal() {
    var h = window.location.hostname;
    return h === 'localhost' || h === '127.0.0.1';
  }

  _proxyUrl() {
    var h = window.location.hostname;
    return (h.indexOf('vercel') !== -1 || this._isLocal()) ? '' : 'https://sidiptv.vercel.app';
  }

  async _fetch(url) {
    var proxy = this._proxyUrl();
    if (this._isLocal()) {
      var resp = await fetch(url);
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      return resp.json();
    }
    var proxyUrl = proxy + '/api/xtream/stream?url=' + encodeURIComponent(url);
    var resp = await fetch(proxyUrl);
    if (!resp.ok) throw new Error('HTTP ' + resp.status);
    return resp.json();
  }

  async _fetchRaw(url) {
    var proxy = this._proxyUrl();
    if (this._isLocal()) return url;
    return proxy + '/api/xtream/stream?url=' + encodeURIComponent(url);
  }

  async authenticate() {
    var data = await this._fetch(this.baseUrl + '&action=user');
    if (data && data.user_info && data.user_info.auth === 1) return data;
    if (data && data.user_info && data.user_info.username) return data;
    throw new Error('Xtream auth failed');
  }

  async getLiveCategories() {
    var data = await this._fetch(this.baseUrl + '&action=get_live_categories');
    return Array.isArray(data) ? data : [];
  }

  async getLiveStreams(categoryId) {
    var url = this.baseUrl + '&action=get_live_streams';
    if (categoryId && categoryId !== 'all') url += '&category_id=' + encodeURIComponent(categoryId);
    var data = await this._fetch(url);
    if (!Array.isArray(data)) return [];
    return data.map(function(ch) {
      return { id: ch.num || ch.id, number: ch.num, name: ch.name, url: '', logo: ch.stream_icon, genre_id: String(ch.category_id), stream_id: ch.stream_id, extension: '', container: '' };
    });
  }

  getLiveUrl(streamId, container) {
    var ext = container || 'm3u8';
    var url = this.server + '/live/' + this.username + '/' + this.password + '/' + streamId + '.' + ext;
    return this._fetchRaw(url);
  }

  async getVodCategories() {
    var data = await this._fetch(this.baseUrl + '&action=get_vod_categories');
    return Array.isArray(data) ? data : [];
  }

  async getVodStreams(categoryId) {
    var url = this.baseUrl + '&action=get_vod_streams';
    if (categoryId && categoryId !== 'all') url += '&category_id=' + encodeURIComponent(categoryId);
    var data = await this._fetch(url);
    if (!Array.isArray(data)) return [];
    return data.map(function(m) {
      return { id: m.num || m.id, name: m.name, url: '', logo: m.stream_icon, genre_id: String(m.category_id), stream_id: m.stream_id, extension: m.container_extension || 'mp4', rating: m.rating || '' };
    });
  }

  getVodUrl(streamId, ext) {
    var url = this.server + '/movie/' + this.username + '/' + this.password + '/' + streamId + '.' + (ext || 'mp4');
    return this._fetchRaw(url);
  }

  async getSeriesCategories() {
    var data = await this._fetch(this.baseUrl + '&action=get_series_categories');
    return Array.isArray(data) ? data : [];
  }

  async getSeriesStreams(categoryId) {
    var url = this.baseUrl + '&action=get_series';
    if (categoryId && categoryId !== 'all') url += '&category_id=' + encodeURIComponent(categoryId);
    var data = await this._fetch(url);
    if (!Array.isArray(data)) return [];
    return data.map(function(s) {
      return { id: s.num || s.series_id, name: s.name, url: '', logo: s.cover || s.stream_icon, genre_id: String(s.category_id), series_id: s.series_id, rating: s.rating || '' };
    });
  }
}
