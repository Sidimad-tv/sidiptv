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
};

/* dom refs */
var $ = function(id) { return document.getElementById(id); };
var app = $('app'), sb = $('sb'), sbN = $('sb-n'), sbF = $('sb-f'), srcList = $('src-list'), addSrc = $('add-src');
var mn = $('mn'), mnH = $('mn-h'), mnC = $('mn-c'), viewTitle = $('view-title'), viewSub = $('view-sub'), search = $('search');
var ply = $('ply'), vid = $('vid'), ld = $('ld'), plyBack = $('ply-back'), plyInfo = $('ply-info');
var bBot = $('b-bot'), plyPlay = $('ply-play'), prFill = $('pr-fill'), tm = $('tm'), plyCc = $('ply-cc'), plyFs = $('ply-fs');
var mod = $('mod'), modTabs = $('mod-tabs'), modForm = $('mod-form'), modSt = $('mod-st');

/* helpers */
function esc(s) { return String(s).replace(/[&<>"']/g, function(c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

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
function isTS(u) { return /\.ts\b|extension=ts|\.m2ts/i.test(u); }
function pUrl(u) {
  if (!u || (u.indexOf('http:') !== 0 && u.indexOf('https:') !== 0)) return u;
  if (location.protocol !== 'https:' || u.indexOf('https:') === 0) return u;
  return location.origin + '/api/stalker/proxy?url=' + encodeURIComponent(u);
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

  if (!state.activeSource) {
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
  if (state.curCat !== 'all') items = items.filter(function(c) { return String(c.genre_id || c.category_id || '') === String(state.curCat); });
  var mode = state.view;
  if (mode === 'tv') renderList(items, $('ch-list'));
  else renderGrid(items, $('ch-list'));
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
      (logo ? '<img src="' + esc(logo) + '" loading="lazy" onerror="this.style.display=\'none\'" crossorigin="anonymous">' : '<span style="width:28px;text-align:center;font-size:14px">📺</span>') +
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
  items.forEach(function(m) {
    var d = document.createElement('div');
    d.className = 'card';
    var logo = m.logo || '';
    d.innerHTML = (logo ? '<img src="' + esc(logo) + '" loading="lazy" onerror="this.style.display=\'none\'" crossorigin="anonymous">' : '<div style="aspect-ratio:2/3;background:#1a1a22;display:flex;align-items:center;justify-content:center;font-size:32px">🎬</div>') +
      '<div class="nm">' + esc(m.name || '') + '</div>';
    d.addEventListener('click', function() { playItem(m, state.view === 'tv' ? 'tv' : 'vod', items); });
    el.appendChild(d);
  });
}

/* Player */
async function playItem(item, mode, all) {
  if (state.mpegtsPlayer) { state.mpegtsPlayer.destroy(); state.mpegtsPlayer = null; }
  vid.pause();
  vid.removeAttribute('src');
  vid.load();
  ld.classList.remove('hidden');
  ply.classList.add('show');
  plyInfo.textContent = item.name || '';

  state.selCh = item;

  var cmd = item.url || item.cmd || '';
  var url = cmd;

  try {
    if (state.clientType === 'stalker' && cmd && state.client && state.client.createLink) {
      url = await state.client.createLink(cmd);
    }
  } catch(e) {}

  var proxiedUrl = pUrl(url);

  /* Xtream/M3U: get stream URL */
  if (state.clientType === 'xtream' && item.stream_id) {
    if (mode === 'tv') proxiedUrl = await state.client.getLiveUrl(item.stream_id, item.extension || 'm3u8');
    else if (mode === 'vod') proxiedUrl = await state.client.getVodUrl(item.stream_id, item.extension || 'mp4');
  }

  /* Check if mpegts can handle it */
  var tryTs = isTS(url) || isTS(proxiedUrl);
  var mpegtsOk = typeof mpegts !== 'undefined' && mpegts.isSupported && mpegts.isSupported();
  var hlsOk = typeof Hls !== 'undefined' && Hls.isSupported && Hls.isSupported() && (proxiedUrl.indexOf('.m3u8') !== -1 || proxiedUrl.indexOf('m3u8') !== -1);

  if (tryTs && mpegtsOk) {
    try {
      state.mpegtsPlayer = mpegts.createPlayer({ type: 'mpegts', isLive: true, url: proxiedUrl });
      state.mpegtsPlayer.attachMediaElement(vid);
      state.mpegtsPlayer.load();
      state.mpegtsPlayer.play().catch(function() {});
      state.mpegtsPlayer.on(mpegts.Events.ERROR, function() {});
      ld.classList.add('hidden');
      return;
    } catch(e) {}
  }

  if (hlsOk) {
    var hls = new Hls();
    hls.loadSource(proxiedUrl);
    hls.attachMedia(vid);
    hls.on(Hls.Events.MANIFEST_PARSED, function() { vid.play().catch(function() {}); });
    ld.classList.add('hidden');
    return;
  }

  /* Native playback */
  vid.src = proxiedUrl;
  vid.play().catch(function() {});
  setTimeout(function() { ld.classList.add('hidden'); }, 2000);
}

vid.addEventListener('play', function() { state.isPlaying = true; plyPlay.textContent = '⏸'; ld.classList.add('hidden'); });
vid.addEventListener('pause', function() { state.isPlaying = false; plyPlay.textContent = '▶'; });
vid.addEventListener('waiting', function() { ld.classList.remove('hidden'); });
vid.addEventListener('canplay', function() { ld.classList.add('hidden'); });
vid.addEventListener('timeupdate', function() {
  if (vid.duration) {
    prFill.style.width = (vid.currentTime / vid.duration * 100) + '%';
    var m = Math.floor(vid.currentTime / 60), s = Math.floor(vid.currentTime % 60);
    tm.textContent = m + ':' + (s < 10 ? '0' : '') + s;
  }
});

plyPlay.addEventListener('click', function() { if (vid.paused) vid.play(); else vid.pause(); });
plyFs.addEventListener('click', function() { vid.requestFullscreen ? vid.requestFullscreen() : vid.webkitRequestFullscreen ? vid.webkitRequestFullscreen() : ''; });
plyBack.addEventListener('click', closePlayer);
document.addEventListener('keydown', function(e) { if (e.key === 'Escape' && ply.classList.contains('show')) closePlayer(); });

function closePlayer() {
  ply.classList.remove('show');
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
      html += '<div style="background:#1a1a22;border-radius:10px;padding:16px;cursor:pointer" onclick="activateSource(' + i + ')">' +
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
  mnC.innerHTML = '<div class="emp">Favorites work in channel list view (click ★)</div>';
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
    switchView('dash');

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
