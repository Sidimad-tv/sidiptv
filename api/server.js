const http = require('http');
const https = require('https');
const url = require('url');

function sendJson(res, status, data) {
  res.writeHead(status, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
  res.end(JSON.stringify(data));
}

function stbHeaders(mac, token) {
  var h = {
    'User-Agent': 'Mozilla/5.0 (QtEmbedded; U; Linux; C) AppleWebKit/533.3 (KHTML, like Gecko) MAG200 stbapp ver: 2 rev: 250 Safari/533.3',
    'X-User-Agent': 'Model: MAG250; Link: Ethernet',
    'Accept': '*/*',
    'Cookie': 'mac=' + mac + '; stb_lang=en; timezone=Europe/London' + (token ? '; token=' + token : ''),
  };
  if (token) h['Authorization'] = 'Bearer ' + token;
  return h;
}

function stbSerial(mac) { return mac.replace(/:/g, '').toLowerCase(); }
function stbDeviceId(mac) {
  var s = mac.replace(/:/g, '').toLowerCase();
  return s + s.split('').reverse().join('');
}
function stbSignature(mac) {
  var s = mac.replace(/:/g, '').toLowerCase();
  var chars = s.split('');
  var mid = Math.floor(chars.length / 2);
  var result = [];
  for (var i = 0; i < mid; i++) result.push(chars[i], chars[chars.length - 1 - i]);
  if (chars.length % 2 !== 0) result.push(chars[mid]);
  return result.join('');
}

function httpGet(u, mac, token) {
  return new Promise(function(resolve, reject) {
    var uobj = new URL(u);
    var mod = uobj.protocol === 'https:' ? https : http;
    var opts = {
      hostname: uobj.hostname, port: uobj.port || (uobj.protocol === 'https:' ? 443 : 80),
      path: uobj.pathname + uobj.search, method: 'GET',
      headers: stbHeaders(mac, token), rejectUnauthorized: false, timeout: 15000,
    };
    var req = mod.request(opts, function(resp) {
      var chunks = [];
      resp.on('data', function(c) { chunks.push(c); });
      resp.on('end', function() {
        var raw = Buffer.concat(chunks).toString();
        try { resolve(JSON.parse(raw)); }
        catch(e) { reject(new Error('Invalid JSON: ' + raw.slice(0,200))); }
      });
    });
    req.on('error', reject);
    req.end();
  });
}

function proxyRequest(res, targetUrl, mac, token) {
  var uobj = new URL(targetUrl);
  var mod = uobj.protocol === 'https:' ? https : http;
  var opts = {
    hostname: uobj.hostname, port: uobj.port || (uobj.protocol === 'https:' ? 443 : 80),
    path: uobj.pathname + uobj.search, method: 'GET',
    headers: stbHeaders(mac, token), rejectUnauthorized: false, timeout: 15000,
  };
  var prec = mod.request(opts, function(pres) {
    var contentType = pres.headers['content-type'] || 'application/octet-stream';
    res.writeHead(pres.statusCode, { 'Content-Type': contentType, 'Access-Control-Allow-Origin': '*' });
    pres.pipe(res);
  });
  prec.on('error', function(e) { sendJson(res, 502, { error: e.message }); });
  prec.end();
}

module.exports = function(req, res) {
  var reqPath = url.parse(req.url).pathname;
  var method = req.method.toUpperCase();

  if (method === 'OPTIONS') {
    res.writeHead(204, { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' });
    return res.end();
  }

  if (reqPath === '/api/stalker/handshake' && method === 'GET') {
    var q = url.parse(req.url, true).query;
    if (!q.portal || !q.mac) return sendJson(res, 400, { error: 'portal and mac required' });
    var baseUrl = q.portal.replace(/\/+$/, '');
    var testUrl = baseUrl + '?type=stb&prehash=0&action=handshake';
    httpGet(testUrl, q.mac).then(function(data) {
      var token = (data.js && data.js.token) || data.token;
      if (token) return sendJson(res, 200, { ok: true, token: token, base: baseUrl });
      sendJson(res, 400, { error: 'No token', data: data });
    }).catch(function(e) { sendJson(res, 502, { error: e.message }); });
  }

  else if (reqPath === '/api/stalker/proxy' && method === 'GET') {
    var q = url.parse(req.url, true).query;
    if (!q.url) return sendJson(res, 400, { error: 'url required' });
    proxyRequest(res, q.url, q.mac || '', q.token || '');
  }

  else if (reqPath === '/api/xtream/live' && method === 'GET') {
    var q = url.parse(req.url, true).query;
    if (!q.server || !q.user || !q.pass) return sendJson(res, 400, { error: 'server, user, pass required' });
    var apiUrl = q.server.replace(/\/+$/, '') + '/player_api.php?username=' + encodeURIComponent(q.user) + '&password=' + encodeURIComponent(q.pass) + '&action=live';
    proxyRequest(res, apiUrl, q.mac || '', '');
  }

  else if (reqPath === '/api/xtream/vod' && method === 'GET') {
    var q = url.parse(req.url, true).query;
    if (!q.server || !q.user || !q.pass) return sendJson(res, 400, { error: 'server, user, pass required' });
    var apiUrl = q.server.replace(/\/+$/, '') + '/player_api.php?username=' + encodeURIComponent(q.user) + '&password=' + encodeURIComponent(q.pass) + '&action=vod';
    proxyRequest(res, apiUrl, q.mac || '', '');
  }

  else if (reqPath === '/api/xtream/series' && method === 'GET') {
    var q = url.parse(req.url, true).query;
    if (!q.server || !q.user || !q.pass) return sendJson(res, 400, { error: 'server, user, pass required' });
    var apiUrl = q.server.replace(/\/+$/, '') + '/player_api.php?username=' + encodeURIComponent(q.user) + '&password=' + encodeURIComponent(q.pass) + '&action=series';
    proxyRequest(res, apiUrl, q.mac || '', '');
  }

  else if (reqPath === '/api/xtream/stream' && method === 'GET') {
    var q = url.parse(req.url, true).query;
    if (!q.url) return sendJson(res, 400, { error: 'url required' });
    proxyRequest(res, q.url, q.mac || '', '');
  }

  else if (reqPath === '/api/m3u/fetch' && method === 'GET') {
    var q = url.parse(req.url, true).query;
    if (!q.url) return sendJson(res, 400, { error: 'url required' });
    proxyRequest(res, q.url, q.mac || '', '');
  }

  else {
    sendJson(res, 404, { error: 'Not found' });
  }
};
