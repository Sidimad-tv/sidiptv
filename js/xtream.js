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
    if (this._isLocal()) return '';
    return window.location.origin;
  }

  async _fetch(url) {
    if (this._isLocal()) {
      var resp = await fetch(url);
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      return resp.json();
    }
    var proxyUrl = window.location.origin + '/api/xtream/stream?url=' + encodeURIComponent(url);
    var resp = await fetch(proxyUrl);
    if (!resp.ok) throw new Error('HTTP ' + resp.status);
    return resp.json();
  }

  _fetchRaw(url) {
    return url;
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

  async getSeriesInfo(seriesId) {
    var raw = await this._fetch(this.baseUrl + '&action=get_series_info&series_id=' + encodeURIComponent(seriesId));
    if (!raw) return {};
    var info = {};
    info.name = raw.name || '';
    info.plot = raw.plot || raw.description || '';
    info.year = raw.year || '';
    info.rating = raw.rating || raw.rating_5based || raw.rating_imdb || '';
    info.cover = raw.cover || '';
    info.episodes = {};
    info.seasons = [];
    /* Parse Xtream seasons/episodes */
    if (raw.episodes && typeof raw.episodes === 'object') {
      var seasonNums = Object.keys(raw.episodes).sort(function(a,b) { return Number(a) - Number(b); });
      seasonNums.forEach(function(sNum) {
        info.seasons.push({ id: sNum, name: 'Season ' + sNum, season_number: sNum });
        info.episodes[sNum] = (raw.episodes[sNum] || []).map(function(ep) {
          var ext = (ep.info && ep.info.container_extension) || ep.container_extension || 'mp4';
          var epId = ep.id;
          var streamUrl = this.server + '/series/' + this.username + '/' + this.password + '/' + epId + '.' + ext;
          return {
            id: epId,
            title: ep.title || 'Episode ' + (ep.episode_num || ''),
            episode_num: ep.episode_num,
            url: streamUrl,
            cmd: streamUrl,
            logo: (ep.info && (ep.info.movie_image || ep.info.thumbnail)) || '',
          };
        }.bind(this));
      }.bind(this));
    }
    return info;
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
