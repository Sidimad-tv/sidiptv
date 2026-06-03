/* state */
var state = {
  view: 'dash',
  sources: [],
  activeSource: null,
  client: null,
  clientType: null,
  allItems: [],
  cats: [],
  curCat: 'all',
  curMode: 'tv',
  selCh: null,
  favs: [],
  mpegtsPlayer: null,
  isPlaying: false,
  seriesDetail: null, /* {series, seasons, episodes} */
  seriesSeason: null,
};

/* dom refs */
var $ = function(id) { return document.getElementById(id); };
var app = $('app'), sb = $('sb'), sbN = $('sb-n'), sbF = $('sb-f'), srcList = $('src-list'), addSrc = $('add-src');
var mn = $('mn'), mnH = $('mn-h'), mnC = $('mn-c'), viewTitle = $('view-title'), viewSub = $('view-sub'), search = $('search');
var ply = $('ply'), vid = $('vid'), ld = $('ld'), plyBack = $('ply-back'), plyInfo = $('ply-info');
var bBot = $('b-bot'), plyPlay = $('ply-play'), prFill = $('pr-fill'), tm = $('tm'), plyVol = $('ply-vol'), plyFs = $('ply-fs');
var mod = $('mod'), modTabs = $('mod-tabs'), modForm = $('mod-form'), modSt = $('mod-st');

/* helpers */
function esc(s) { return String(s).replace(/[&<>"']/g, function(c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
function safeUrl(s) { if (!s) return ''; return s.replace(/^http:\/\//i, '//'); }

/* storage */
function loadSources() {
  try { return JSON.parse(localStorage.getItem('s_src') || '[]'); } catch(e) { return []; }
}
function saveSources(s) { localStorage.setItem('s_src', JSON.stringify(s)); state.sources = s; }
function loadFavs() {
  try { return JSON.parse(localStorage.getItem('s_fav') || '[]'); } catch(e) { return []; }
}
function saveFavs(f) { localStorage.setItem('s_fav', JSON.stringify(f)); state.favs = f; }

/* player helpers */
function isTS(u) { return /\.ts\b|extension=ts|\.m2ts|\.tsv/i.test(u); }
function isM3U8(u) { return /\.m3u8|m3u8/i.test(u); }
function pUrl(u) {
  if (!u || (u.indexOf('http:') !== 0 && u.indexOf('https:') !== 0)) return u;
  if (location.protocol !== 'https:' || u.indexOf('https:') === 0) return u;
  var endpoint = state.clientType === 'stalker' ? '/api/stalker/proxy' : '/api/xtream/stream';
  var pu = location.origin + endpoint + '?url=' + encodeURIComponent(u);
  if (state.client && state.client.mac) pu += '&mac=' + encodeURIComponent(state.client.mac);
  if (state.client && state.client.token) pu += '&token=' + encodeURIComponent(state.client.token);
  return pu;
}

/* sidebar nav */
sbN.addEventListener('click', function(e) {
  var btn = e.target.closest('button');
  if (!btn || !btn.dataset.view) return;
  sbN.querySelectorAll('button').forEach(function(b) { b.classList.remove('act'); });
  btn.classList.add('act');
  switchView(btn.dataset.view);
});

function switchView(view) {
  state.view = view;
  state.allItems = [];
  state.cats = [];
  state.curCat = 'all';
  search.value = '';
  mnC.innerHTML = '';
  viewSub.textContent = '';

  if (view === 'dash') { renderDash(); return; }
  if (view === 'favs') { renderFavs(); return; }

  if (state.activeSource === null || state.activeSource === undefined) {
    mnC.innerHTML = '<div class="emp"><div class="ic">📡</div>Select a source from the sidebar</div>';
    return;
  }

  var mode = view;
  viewTitle.textContent = { tv: 'Live TV', movies: 'Movies', series: 'Series' }[mode] || mode;
  loadContent(mode);
}

/* render sidebar sources */
function renderSources() {
  srcList.innerHTML = '';
  var ss = loadSources();
  state.sources = ss;
  if (!ss.length) return;
  ss.forEach(function(s, i) {
    var d = document.createElement('div');
    d.className = 'src-item' + (state.activeSource === i ? ' act' : '');
    var colors = { stalker: '#00d4a0', xtream: '#d49000', m3u: '#9070e0' };
    d.innerHTML = '<span class="dot" style="background:' + (colors[s.type] || '#555') + '"></span>' + esc(s.name || s.type + ' ' + (i + 1)) + '<span class="del" data-idx="' + i + '">✕</span>';
    d.addEventListener('click', function(e) {
      if (e.target.classList.contains('del')) return;
      state.view = 'tv';
      activateSource(i);
    });
    d.querySelector('.del').addEventListener('click', function(e) {
      e.stopPropagation();
      var a = loadSources();
      a.splice(i, 1);
      saveSources(a);
      if (state.activeSource === i) { state.activeSource = null; state.client = null; }
      else if (state.activeSource > i) state.activeSource--;
      renderSources();
      switchView(state.view);
    });
    srcList.appendChild(d);
  });
}

async function activateSource(idx) {
  var ss = state.sources;
  if (idx < 0 || idx >= ss.length) return;
  state.activeSource = idx;
  state.client = null;
  state.clientType = null;
  renderSources();
  var s = ss[idx];
  mnC.innerHTML = '<div class="emp"><div class="ld" style="display:block;position:static;transform:none"><div class="sp"></div></div>Connecting...</div>';

  try {
    if (s.type === 'stalker') {
      state.clientType = 'stalker';
      var c = new StalkerClient(s.portal, s.mac);
      await c.authenticate();
      state.client = c;
      viewSub.textContent = s.name || s.portal;
      switchView(state.view);
    } else if (s.type === 'xtream') {
      state.clientType = 'xtream';
      var x = new XtreamClient(s.server, s.user, s.pass);
      await x.authenticate();
      state.client = x;
      viewSub.textContent = s.name || s.server;
      switchView(state.view);
    } else if (s.type === 'm3u') {
      state.clientType = 'm3u';
      state.client = { url: s.url };
      viewSub.textContent = s.name || s.url;
      switchView(state.view);
    }
  } catch(e) {
    mnC.innerHTML = '<div class="emp"><div class="ic">⚠️</div>' + esc(e.message) + '</div>';
  }
}

async function loadContent(mode) {
  var container = document.createElement('div');
  var catsEl = document.createElement('div');
  catsEl.className = 'cats';
  catsEl.id = 'cats';
  container.appendChild(catsEl);
  var listEl = document.createElement('div');
  listEl.className = 'ch-list';
  listEl.id = 'ch-list';
  container.appendChild(listEl);
  mnC.appendChild(container);

  try {
    if (state.clientType === 'stalker') {
      await loadStalkerContent(mode, listEl, catsEl);
    } else if (state.clientType === 'xtream') {
      await loadXtreamContent(mode, listEl, catsEl);
    } else if (state.clientType === 'm3u') {
      await loadM3uContent(mode, listEl, catsEl);
    }
  } catch(e) {
    listEl.innerHTML = '<div class="emp"><div class="ic">⚠️</div>' + esc(e.message) + '</div>';
  }
}

async function loadStalkerContent(mode, listEl, catsEl) {
  var c = state.client;
  if (mode === 'tv') {
    var g = await c.getGenres();
    renderCats(g, catsEl);
    var chs = await c.getChannels();
    state.allItems = chs;
    renderList(chs, listEl);
    viewTitle.textContent = 'Live TV';
  } else {
    var t = mode === 'series' ? 'series' : 'vod';
    var g = await c.getVodCategories(t);
    renderCats(g, catsEl);
    var its = await c.getVodList('all', t);
    state.allItems = its;
    renderGrid(its, listEl);
    viewTitle.textContent = mode === 'series' ? 'Series' : 'Movies';
  }
}

async function loadXtreamContent(mode, listEl, catsEl) {
  var c = state.client;
  if (mode === 'tv') {
    var g = await c.getLiveCategories();
    renderCats(g, catsEl);
    var chs = await c.getLiveStreams();
    state.allItems = chs;
    renderList(chs, listEl);
  } else if (mode === 'movies') {
    var g = await c.getVodCategories();
    renderCats(g, catsEl);
    var its = await c.getVodStreams();
    state.allItems = its;
    renderGrid(its, listEl);
  } else if (mode === 'series') {
    var g = await c.getSeriesCategories();
    renderCats(g, catsEl);
    var its = await c.getSeriesStreams();
    state.allItems = its;
    renderGrid(its, listEl);
  }
}

async function loadM3uContent(mode, listEl, catsEl) {
  if (mode !== 'tv') {
    listEl.innerHTML = '<div class="emp">M3U supports Live TV only</div>';
    return;
  }
  try {
    var resp = await fetch('/api/m3u/fetch?url=' + encodeURIComponent(state.client.url));
    if (!resp.ok) throw new Error('Failed to fetch M3U');
    var text = await resp.text();
    var its = parseM3u(text);
    state.allItems = its;
    /* Build categories from groups */
    var groups = {};
    its.forEach(function(ch) {
      if (ch.genre_id) groups[ch.genre_id] = { title: ch.genre_id, id: ch.genre_id };
    });
    var cats = Object.keys(groups).map(function(k) { return groups[k]; });
    renderCats(cats, catsEl);
    renderList(its, listEl);
  } catch(e) {
    listEl.innerHTML = '<div class="emp"><div class="ic">⚠️</div>' + esc(e.message) + '</div>';
  }
}

function parseM3u(text) {
  var channels = [];
  var lines = text.split('\n');
  var cur = {};
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].trim();
    if (line.indexOf('#EXTINF:') === 0) {
      cur = {};
      var mg = line.match(/tvg-logo="([^"]*)"/i);
      cur.logo = mg ? mg[1] : '';
      var ng = line.match(/group-title="([^"]*)"/i);
      cur.group = ng ? ng[1] : '';
      var ng2 = line.match(/tvg-name="([^"]*)"/i);
      cur.tvgName = ng2 ? ng2[1] : '';
      var name = line.replace(/^[^,]*,\s*/, '');
      cur.name = cur.tvgName || name || '';
    } else if (line && line.indexOf('#') !== 0 && cur.name) {
      cur.url = line;
      channels.push(cur);
      cur = {};
    }
  }
  return channels.map(function(ch, i) {
    return { id: i, number: '', name: ch.name, url: ch.url, logo: ch.logo, genre_id: ch.group || '' };
  });
}

function renderCats(g, el) {
  state.cats = g || [];
  el.innerHTML = '<button class="act">All</button>';
  (g || []).forEach(function(cat) {
    var b = document.createElement('button');
    b.textContent = cat.title || cat.name || cat.category_name || 'Unnamed';
    b.addEventListener('click', function() {
      el.querySelectorAll('button').forEach(function(x) { x.classList.remove('act'); });
      b.classList.add('act');
      state.curCat = cat.id || cat.category_id || 'all';
      filterList();
    });
    el.appendChild(b);
  });
  state.curCat = 'all';
}

function filterList() {
  var items = state.allItems;
  if (state.curCat !== 'all') {
    items = items.filter(function(c) {
      var id = c.genre_id || c.category_id || '';
      return String(id) === String(state.curCat);
    });
  }
  var el = $('ch-list');
  if (!el) return;
  if (state.view === 'tv') renderList(items, el);
  else if (state.view === 'series') renderGrid(items, el);
  else renderGrid(items, el);
}

function renderList(items, el) {
  el.innerHTML = '';
  if (!items || !items.length) { el.innerHTML = '<div class="emp"><div class="ic">📭</div>Nothing here</div>'; return; }
  items.forEach(function(ch) {
    var d = document.createElement('div');
    d.className = 'ch';
    var u = ch.url || ch.cmd || '';
    var f = loadFavs().indexOf(u) !== -1;
    var logo = ch.logo || '';
    d.innerHTML = (ch.number ? '<span class="n">' + esc(ch.number) + '</span>' : '') +
      (logo ? '<img src="' + esc(safeUrl(logo)) + '" loading="lazy" onerror="this.style.display=\'none\'" referrerpolicy="no-referrer">' : '<span style="width:28px;text-align:center;font-size:14px">📺</span>') +
      '<span class="nm">' + esc(ch.name || '') + '</span>' +
      '<span class="st' + (f ? ' on' : '') + '">★</span>';
    d.querySelector('.st').addEventListener('click', function(e) {
      e.stopPropagation();
      var a = loadFavs(), i = a.indexOf(u);
      if (i === -1) a.push(u); else a.splice(i, 1);
      saveFavs(a);
      this.classList.toggle('on');
    });
    d.addEventListener('click', function() { playItem(ch, mode, items); });
    el.appendChild(d);
  });
}

function renderGrid(items, el) {
  el.className = 'gr';
  el.innerHTML = '';
  if (!items || !items.length) { el.className = 'ch-list'; el.innerHTML = '<div class="emp"><div class="ic">📭</div>Nothing here</div>'; return; }
  var isSeries = state.view === 'series';
  items.forEach(function(m) {
    var d = document.createElement('div');
    d.className = 'card';
    var logo = m.logo || '';
    d.innerHTML = (logo ? '<img src="' + esc(safeUrl(logo)) + '" loading="lazy" onerror="this.style.display=\'none\'" referrerpolicy="no-referrer">' : '<div style="aspect-ratio:2/3;background:#1a1a22;display:flex;align-items:center;justify-content:center;font-size:32px">📺</div>') +
      '<div class="nm">' + esc(m.name || '') + '</div>';
    d.addEventListener('click', function() {
      if (isSeries) browseSeries(m, items);
      else playItem(m, 'vod', items);
    });
    el.appendChild(d);
  });
}

/* Series browsing */
async function browseSeries(seriesItem, allItems) {
  mnC.innerHTML = '<div class="emp"><div class="ld" style="display:block;position:static;transform:none"><div class="sp"></div></div>Loading...</div>';
  state.seriesDetail = { series: seriesItem, items: allItems };
  state.seriesSeason = null;

  try {
    var info = null;
    if (state.clientType === 'xtream') {
      info = await state.client.getSeriesInfo(seriesItem.series_id || seriesItem.id);
    } else if (state.clientType === 'stalker') {
      info = await state.client.getVodInfo(seriesItem.id, 'series');
    }

    if (!info) throw new Error('Could not load series info');

    var seasons = [];
    if (info.seasons && Array.isArray(info.seasons)) {
      seasons = info.seasons;
    } else if (info.episodes) {
      /* Xtream returns episodes grouped by season */
      var seasonKeys = Object.keys(info.episodes || {}).sort();
      seasons = seasonKeys.map(function(s) { return { id: s, name: 'Season ' + s, season_number: s }; });
    }

    state.seriesDetail.seasons = seasons;
    state.seriesDetail.info = info;
    renderSeriesDetail(info, seasons, seriesItem);
  } catch(e) {
    /* Fallback: try to play as regular VOD if series info fails */
    playItem(seriesItem, 'vod', allItems);
  }
}

function renderSeriesDetail(info, seasons, seriesItem) {
  var html = '<div class="series-detail">';
  html += '<button class="back-btn" id="series-back" style="background:none;border:none;color:#00d4a0;cursor:pointer;font-size:13px;margin-bottom:10px;display:flex;align-items:center;gap:6px;padding:6px 0"><span>←</span> Back to series</button>';
  html += '<div class="series-header" style="display:flex;gap:16px;margin-bottom:20px">';
  if (seriesItem.logo) html += '<img src="' + esc(safeUrl(seriesItem.logo)) + '" style="width:120px;height:180px;object-fit:cover;border-radius:8px;flex-shrink:0" onerror="this.style.display=\'none\'">';
  html += '<div><h2 style="font-size:18px;margin-bottom:6px">' + esc(seriesItem.name || '') + '</h2>';
  if (info.description || info.plot) html += '<p style="font-size:12px;color:#7878a0;line-height:1.5">' + esc(info.description || info.plot) + '</p>';
  if (info.year) html += '<span style="font-size:11px;color:#555;margin-top:6px;display:inline-block">' + esc(info.year) + '</span>';
  if (info.rating || info.rating_imdb) html += '<span style="font-size:11px;color:#f0b400;margin-left:10px">★ ' + esc(info.rating || info.rating_imdb) + '</span>';
  html += '</div></div>';

  if (seasons && seasons.length) {
    html += '<div class="seasons" id="seasons">';
    var epCount = 0;
    seasons.forEach(function(s) {
      var eps = [];
      if (info.episodes && info.episodes[s.id || s.season_number]) {
        eps = info.episodes[s.id || s.season_number];
      }
      var snum = s.season_number || s.id || '';
      var c = eps.length;
      epCount += c;
      html += '<div class="season-block" style="margin-bottom:14px">';
      html += '<div class="season-h" style="display:flex;align-items:center;gap:8px;padding:8px 10px;cursor:pointer;border-radius:6px;background:#1a1a26;margin-bottom:6px" onclick="toggleSeason(this)">';
      html += '<span style="font-size:12px;color:#00d4a0">▶</span>';
      html += '<span style="font-size:13px;font-weight:500">' + esc(s.name || 'Season ' + snum) + '</span>';
      html += '<span style="font-size:11px;color:#555;margin-left:auto">' + c + ' episodes</span>';
      html += '</div>';
      html += '<div class="ep-list" style="display:none;padding-left:8px">';
      eps.forEach(function(ep) {
        var title = ep.title || ep.name || 'Episode ' + (ep.episode_num || ep.series || '');
        var epNum = ep.episode_num || ep.series || '';
        html += '<div class="ep-item" data-cmd="' + esc(ep.url || ep.cmd || '') + '" data-id="' + (ep.id || '') + '" style="display:flex;align-items:center;gap:10px;padding:6px 10px;border-radius:6px;cursor:pointer;transition:background .1s" onmouseover="this.style.background=\'#1a1a26\'" onmouseout="this.style.background=\'transparent\'" onclick="playSeriesEpisode(this)">';
        if (ep.info && ep.info.thumbnail || ep.logo) html += '<img src="' + esc(safeUrl(ep.info && ep.info.thumbnail || ep.logo)) + '" style="width:40px;height:30px;object-fit:cover;border-radius:4px;flex-shrink:0" onerror="this.style.display=\'none\'">';
        html += '<span style="font-size:12px">' + esc(title) + '</span>';
        html += '<span style="font-size:11px;color:#555;margin-left:auto">▶</span>';
        html += '</div>';
      });
      html += '</div></div>';
    });
    html += '</div>';
  }

  html += '</div>';
  mnC.innerHTML = html;
  viewTitle.textContent = seriesItem.name || 'Series';
  viewSub.textContent = (seasons ? seasons.length : 0) + ' seasons, ' + epCount + ' episodes';

  /* Auto-open first season */
  var firstSeason = document.querySelector('.ep-list');
  if (firstSeason) { firstSeason.style.display = 'block'; var arrow = firstSeason.parentElement.querySelector('.season-h span:first-child'); if (arrow) arrow.textContent = '▼'; }

  document.getElementById('series-back').addEventListener('click', function() {
    state.seriesDetail = null;
    var items = state.allItems;
    var el = $('ch-list');
    if (el) renderGrid(items, el);
    viewTitle.textContent = state.view === 'series' ? 'Series' : 'Movies';
    viewSub.textContent = state.cats.length + ' categories';
  });
}

function toggleSeason(el) {
  var list = el.nextElementSibling;
  var arrow = el.querySelector('span:first-child');
  if (list.style.display === 'block') {
    list.style.display = 'none';
    if (arrow) arrow.textContent = '▶';
  } else {
    list.style.display = 'block';
    if (arrow) arrow.textContent = '▼';
  }
}

async function playSeriesEpisode(el) {
  var cmd = el.dataset.cmd;
  var id = el.dataset.id;
  var item = { name: el.querySelector('span:nth-child(2)') ? el.querySelector('span:nth-child(2)').textContent : 'Episode', url: cmd, id: id };
  await playItem(item, 'vod', [item]);
}

/* Player */
async function playItem(item, mode, all) {
  /* Clean up any existing player */
  if (state.mpegtsPlayer) { try { state.mpegtsPlayer.destroy(); } catch(e) {} state.mpegtsPlayer = null; }
  if (state.hlsPlayer) { try { state.hlsPlayer.destroy(); } catch(e) {} state.hlsPlayer = null; }
  vid.pause();
  vid.removeAttribute('src');
  vid.load();
  ld.classList.remove('hidden');
  ply.classList.add('show');
  plyInfo.textContent = item.name || '';
  state.selCh = item;
  resetHideTimer();

  var cmd = item.url || item.cmd || '';
  var url = cmd;
  var proxiedUrl = cmd;

  try {
    if (state.clientType === 'stalker' && cmd && state.client && state.client.createLink) {
      url = await state.client.createLink(cmd, mode === 'tv' ? 'itv' : 'vod');
    }
  } catch(e) { console.log('[Play] createLink error:', e); }

  /* Xtream/M3U: get stream URL */
  if (state.clientType === 'xtream' && item.stream_id) {
    try {
      if (mode === 'tv') url = await state.client.getLiveUrl(item.stream_id, item.extension || 'm3u8');
      else if (mode === 'vod') url = await state.client.getVodUrl(item.stream_id, item.extension || 'mp4');
    } catch(e) { console.log('[Play] xtream url error:', e); }
  }

  proxiedUrl = pUrl(url);

  /* Clean up old state.hlsPlayer */
  state.hlsPlayer = null;

  /* Detect stream format */
  var isTsUrl = isTS(url) || isTS(proxiedUrl);
  var isHlsUrl = isM3U8(url) || isM3U8(proxiedUrl);
  var mpegtsOk = isTsUrl && typeof mpegts !== 'undefined' && mpegts.isSupported && mpegts.isSupported();
  var hlsOk = isHlsUrl && typeof Hls !== 'undefined' && Hls.isSupported && Hls.isSupported();

  /* Try mpegts.js for TS streams */
  if (mpegtsOk) {
    try {
      state.mpegtsPlayer = mpegts.createPlayer({ type: 'mpegts', isLive: true, url: proxiedUrl });
      state.mpegtsPlayer.attachMediaElement(vid);
      state.mpegtsPlayer.load();
      state.mpegtsPlayer.play().catch(function() {});
      state.mpegtsPlayer.on(mpegts.Events.ERROR, function() {
        ld.classList.add('hidden');
        plyInfo.textContent = '⚠️ Stream error';
      });
      ld.classList.add('hidden');
      return;
    } catch(e) { console.log('[Play] mpegts error:', e); }
  }

  /* Try hls.js for HLS streams */
  if (hlsOk) {
    try {
      state.hlsPlayer = new Hls({ enableWorker: false });
      state.hlsPlayer.loadSource(proxiedUrl);
      state.hlsPlayer.attachMedia(vid);
      state.hlsPlayer.on(Hls.Events.MANIFEST_PARSED, function() { vid.play().catch(function() {}); ld.classList.add('hidden'); });
      state.hlsPlayer.on(Hls.Events.ERROR, function(evt, data) {
        if (data.fatal) { ld.classList.add('hidden'); plyInfo.textContent = '⚠️ HLS error'; }
      });
      return;
    } catch(e) { console.log('[Play] hls error:', e); }
  }

  /* Native playback as final fallback */
  vid.src = proxiedUrl;
  vid.load();
  var playPromise = vid.play();
  if (playPromise) playPromise.catch(function(e) {
    console.log('[Play] native error:', e);
    plyInfo.textContent = '⚠️ Playback failed';
  });
  setTimeout(function() { ld.classList.add('hidden'); }, 2000);
}

function closePlayer() {
  ply.classList.remove('show');
  clearTimeout(hideTimer);
  ply.querySelectorAll('.bar, .b-bot').forEach(function(el) { el.style.opacity = '1'; });
  if (state.mpegtsPlayer) { try { state.mpegtsPlayer.destroy(); } catch(e) {} state.mpegtsPlayer = null; }
  if (state.hlsPlayer) { try { state.hlsPlayer.destroy(); } catch(e) {} state.hlsPlayer = null; }
  vid.pause();
  vid.removeAttribute('src');
  vid.load();
}

function fmtTime(t) { if (!t || !isFinite(t)) return '0:00'; var m = Math.floor(t / 60), s = Math.floor(t % 60); return m + ':' + (s < 10 ? '0' : '') + s; }

vid.addEventListener('play', function() { state.isPlaying = true; plyPlay.textContent = '⏸'; ld.classList.add('hidden'); });
vid.addEventListener('pause', function() { state.isPlaying = false; plyPlay.textContent = '▶'; });
vid.addEventListener('waiting', function() { ld.classList.remove('hidden'); });
vid.addEventListener('canplay', function() { ld.classList.add('hidden'); });
vid.addEventListener('error', function() {
  ld.classList.add('hidden');
  plyInfo.textContent = '⚠️ Playback error - try another channel';
});
vid.addEventListener('timeupdate', function() {
  if (vid.duration) {
    prFill.style.width = (vid.currentTime / vid.duration * 100) + '%';
    tm.textContent = fmtTime(vid.currentTime) + ' / ' + fmtTime(vid.duration);
  }
});

/* Progress bar click to seek */
$('pr').addEventListener('click', function(e) {
  var rect = this.getBoundingClientRect();
  var pct = (e.clientX - rect.left) / rect.width;
  if (vid.duration) vid.currentTime = pct * vid.duration;
});

/* Volume control */
var volMuted = false, volLevel = 1;
plyVol.addEventListener('click', function() {
  if (vid.muted) { vid.muted = false; vid.volume = volLevel; plyVol.textContent = vid.volume > 0.5 ? '🔊' : '🔉'; }
  else { volMuted = true; volLevel = vid.volume; vid.muted = true; plyVol.textContent = '🔇'; }
});
vid.addEventListener('volumechange', function() {
  if (vid.muted || vid.volume === 0) plyVol.textContent = '🔇';
  else plyVol.textContent = vid.volume > 0.5 ? '🔊' : '🔉';
});

plyPlay.addEventListener('click', function() { if (vid.paused) vid.play().catch(function() {}); else vid.pause(); });
plyFs.addEventListener('click', function() {
  if (document.fullscreenElement) document.exitFullscreen();
  else { var el = vid.requestFullscreen ? vid : ply; (el.requestFullscreen || el.webkitRequestFullscreen || function() {}).call(el); }
});
plyBack.addEventListener('click', closePlayer);
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && ply.classList.contains('show')) closePlayer();
  if (e.key === ' ' && ply.classList.contains('show')) { e.preventDefault(); if (vid.paused) vid.play().catch(function() {}); else vid.pause(); }
});

/* Auto-hide player controls */
var hideTimer = null;
function resetHideTimer() {
  ply.querySelectorAll('.bar, .b-bot').forEach(function(el) { el.style.opacity = '1'; });
  clearTimeout(hideTimer);
  hideTimer = setTimeout(function() {
    if (state.isPlaying) ply.querySelectorAll('.bar, .b-bot').forEach(function(el) { el.style.opacity = '0'; });
  }, 3000);
}
ply.addEventListener('mousemove', resetHideTimer);
ply.addEventListener('click', resetHideTimer);
resetHideTimer();

function closePlayer() {
  ply.classList.remove('show');
  clearTimeout(hideTimer);
  ply.querySelectorAll('.bar, .b-bot').forEach(function(el) { el.style.opacity = '1'; });
  if (state.mpegtsPlayer) { state.mpegtsPlayer.destroy(); state.mpegtsPlayer = null; }
  vid.pause();
  vid.removeAttribute('src');
  vid.load();
}

/* search */
search.addEventListener('input', function() {
  var q = search.value.toLowerCase();
  var items = state.allItems;
  if (!q) { filterList(); return; }
  var filtered = items.filter(function(c) { return (c.name || '').toLowerCase().indexOf(q) !== -1; });
  var el = $('ch-list');
  if (!el) return;
  if (state.view === 'tv') renderList(filtered, el);
  else renderGrid(filtered, el);
});

/* dashboard */
function renderDash() {
  viewTitle.textContent = 'Dashboard';
  var ss = loadSources();
  var favs = loadFavs();
  var html = '<div class="wel"><div class="ic">📺</div><h2>Welcome to sidiptv</h2><p>Add your IPTV source to get started. Supports Stalker Portal, Xtream Codes, and M3U playlists.</p></div>';
  if (ss.length) {
    html = '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px">';
    ss.forEach(function(s, i) {
      html += '<div style="background:#1a1a22;border-radius:10px;padding:16px;cursor:pointer" onclick="state.view=\'tv\';activateSource(' + i + ')">' +
        '<div style="font-size:24px;margin-bottom:8px">' + (s.type === 'stalker' ? '📡' : s.type === 'xtream' ? '🔑' : '📋') + '</div>' +
        '<div style="font-weight:600">' + esc(s.name || s.type) + '</div>' +
        '<div style="font-size:11px;color:#7878a0;margin-top:4px">' + esc(s.type === 'stalker' ? s.portal : s.type === 'xtream' ? s.server : s.url) + '</div></div>';
    });
    html += '</div>';
  }
  mnC.innerHTML = html;
  viewSub.textContent = ss.length + ' source' + (ss.length !== 1 ? 's' : '');
}

/* favorites */
function renderFavs() {
  viewTitle.textContent = 'Favorites';
  var favs = loadFavs();
  if (!favs.length) { mnC.innerHTML = '<div class="emp"><div class="ic">⭐</div>No favorites yet</div>'; return; }
  viewSub.textContent = favs.length + ' item' + (favs.length !== 1 ? 's' : '');
  /* Build fav items from all sources */
  var all = state.allItems;
  var favItems = all.filter(function(item) {
    var url = item.url || item.cmd || '';
    return favs.indexOf(url) !== -1;
  });
  if (favItems.length) {
    var el = document.createElement('div');
    el.className = 'ch-list';
    mnC.innerHTML = '';
    mnC.appendChild(el);
    favItems.forEach(function(ch) {
      var d = document.createElement('div');
      d.className = 'ch';
      var u = ch.url || ch.cmd || '';
      var logo = ch.logo || '';
      d.innerHTML = (ch.number ? '<span class="n">' + esc(ch.number) + '</span>' : '') +
        (logo ? '<img src="' + esc(safeUrl(logo)) + '" loading="lazy" onerror="this.style.display=\'none\'" referrerpolicy="no-referrer">' : '<span style="width:28px;text-align:center;font-size:14px">📺</span>') +
        '<span class="nm">' + esc(ch.name || '') + '</span>' +
        '<span class="st on">★</span>';
      d.querySelector('.st').addEventListener('click', function(e) {
        e.stopPropagation();
        var a = loadFavs(), i = a.indexOf(u);
        if (i !== -1) a.splice(i, 1);
        saveFavs(a);
        renderFavs();
      });
      d.addEventListener('click', function() { playItem(ch, state.view === 'tv' ? 'tv' : 'vod', favItems); });
      el.appendChild(d);
    });
  } else {
    mnC.innerHTML = '<div class="emp"><div class="ic">⭐</div>Browse channels and click ★ to add favorites</div>';
  }
}

/* modal - add source */
addSrc.addEventListener('click', function() {
  mod.classList.add('show');
  showModForm('stalker');
});

function closeMod() { mod.classList.remove('show'); modSt.textContent = ''; }
mod.addEventListener('click', function(e) { if (e.target === mod) closeMod(); });

modTabs.addEventListener('click', function(e) {
  var btn = e.target.closest('button');
  if (!btn || !btn.dataset.type) return;
  modTabs.querySelectorAll('button').forEach(function(b) { b.classList.remove('act'); });
  btn.classList.add('act');
  showModForm(btn.dataset.type);
});

function showModForm(type) {
  var html = '';
  if (type === 'stalker') {
    html = '<label>Source Name</label><input id="m-name" placeholder="My Portal" value="Portal">' +
      '<label>Portal URL</label><input id="m-portal" placeholder="http://example.com/c">' +
      '<label>MAC Address</label><input id="m-mac" placeholder="00:1A:2B:3C:4D:5E">';
  } else if (type === 'xtream') {
    html = '<label>Source Name</label><input id="m-name" placeholder="My Xtream" value="Xtream">' +
      '<label>Server URL</label><input id="m-server" placeholder="http://example.com:8080">' +
      '<label>Username</label><input id="m-user" placeholder="username">' +
      '<label>Password</label><input id="m-pass" type="password" placeholder="password">';
  } else if (type === 'm3u') {
    html = '<label>Source Name</label><input id="m-name" placeholder="My Playlist" value="M3U">' +
      '<label>M3U URL</label><input id="m-url" placeholder="http://example.com/playlist.m3u">';
  }
  html += '<div class="btns"><button class="sc" onclick="closeMod()">Cancel</button><button class="pr" id="m-save">Connect</button></div>';
  modForm.innerHTML = html;
  $('m-save').addEventListener('click', function() { saveModSource(type); });
}

async function saveModSource(type) {
  var btn = $('m-save');
  btn.disabled = true;
  btn.textContent = 'Connecting...';
  modSt.textContent = '';
  modSt.style.color = '#7878a0';

  try {
    var ss = loadSources();
    var src;

    if (type === 'stalker') {
      var portal = $('m-portal').value.trim();
      var mac = $('m-mac').value.trim().toUpperCase().replace(/[^A-F0-9]/g, '');
      if (mac.length === 12) mac = mac.match(/.{2}/g).join(':');
      var name = $('m-name').value.trim() || 'Portal';
      if (!portal || !/^([0-9A-F]{2}:){5}[0-9A-F]{2}$/.test(mac)) { modSt.textContent = 'Valid URL and MAC required'; modSt.style.color = '#f55'; btn.disabled = false; btn.textContent = 'Connect'; return; }

      modSt.textContent = 'Connecting...';
      src = { type: 'stalker', portal: portal, mac: mac, name: name };
      /* test connection */
      var c = new StalkerClient(portal, mac);
      await c.authenticate();
      modSt.textContent = '✓ Connected';
      modSt.style.color = '#00d4a0';

    } else if (type === 'xtream') {
      var server = $('m-server').value.trim();
      var user = $('m-user').value.trim();
      var pass = $('m-pass').value.trim();
      var name = $('m-name').value.trim() || 'Xtream';
      if (!server || !user || !pass) { modSt.textContent = 'All fields required'; modSt.style.color = '#f55'; btn.disabled = false; btn.textContent = 'Connect'; return; }

      modSt.textContent = 'Connecting...';
      src = { type: 'xtream', server: server, user: user, pass: pass, name: name };
      var x = new XtreamClient(server, user, pass);
      await x.authenticate();
      modSt.textContent = '✓ Connected';
      modSt.style.color = '#00d4a0';

    } else if (type === 'm3u') {
      var m3uUrl = $('m-url').value.trim();
      var name = $('m-name').value.trim() || 'M3U';
      if (!m3uUrl) { modSt.textContent = 'URL required'; modSt.style.color = '#f55'; btn.disabled = false; btn.textContent = 'Connect'; return; }
      src = { type: 'm3u', url: m3uUrl, name: name };
      modSt.textContent = '✓ Added';
      modSt.style.color = '#00d4a0';
    }

    ss.push(src);
    saveSources(ss);
    renderSources();
    setTimeout(closeMod, 600);
    state.view = 'tv';
    activateSource(ss.length - 1);

  } catch(e) {
    modSt.textContent = '✗ ' + e.message;
    modSt.style.color = '#f55';
  }

  btn.disabled = false;
  btn.textContent = 'Connect';
}

/* init */
renderSources();
renderDash();
