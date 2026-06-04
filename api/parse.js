const http = require("http");
const https = require("https");

function httpGet(urlStr, headers, timeoutMs) {
  return new Promise((resolve, reject) => {
    const u = new URL(urlStr);
    const mod = u.protocol === "https:" ? https : http;
    const req = mod.request({
      hostname: u.hostname,
      port: u.port || (u.protocol === "https:" ? 443 : 80),
      path: u.pathname + u.search,
      method: "GET",
      headers: headers || {},
      rejectUnauthorized: false,
      timeout: timeoutMs || 30000,
    }, (resp) => {
      const chunks = [];
      resp.on("data", c => chunks.push(c));
      resp.on("end", () => resolve({ status: resp.statusCode, body: Buffer.concat(chunks).toString() }));
    });
    req.on("error", reject);
    req.on("timeout", () => { req.destroy(); reject(new Error("Timeout")); });
    req.end();
  });
}

function parseM3u(text) {
  const lines = text.split("\n");
  const items = [];
  let currentInfo = null;
  const extinfRe = /#EXTINF:(?:-?\d+)(?:\s+([^,]*))?,(.+)/;
  const attrRe = /(\w[-_\w]*)\s*=\s*"([^"]*)"/g;
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("#EXTM3U")) continue;
    if (trimmed.startsWith("#EXTINF:")) {
      const m = trimmed.match(extinfRe);
      if (m) {
        const attrs = {};
        let match;
        while ((match = attrRe.exec(m[1] || "")) !== null) {
          attrs[match[1].toLowerCase()] = match[2];
        }
        currentInfo = {
          name: m[2].trim(),
          tvg: { id: attrs["tvg-id"] || "", name: attrs["tvg-name"] || "", logo: attrs["tvg-logo"] || "" },
          group: { title: attrs["group-title"] || "" },
        };
      }
    } else if (trimmed && !trimmed.startsWith("#") && currentInfo) {
      const entry = {
        id: Math.random().toString(36).slice(2),
        name: currentInfo.name,
        url: trimmed,
        tvg: currentInfo.tvg,
        group: currentInfo.group,
      };
      items.push(entry);
      currentInfo = null;
    }
  }
  return { header: { attrs: {} }, items };
}

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
  };
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  const params = event.queryStringParameters || {};
  const url = params.url;
  if (!url) {
    return { statusCode: 400, headers, body: JSON.stringify({ message: "Missing url" }) };
  }

  try {
    const result = await httpGet(url, { "User-Agent": "Mozilla/5.0" }, 30000);
    const text = result.body;
    const parsed = parseM3u(text);
    const id = Math.random().toString(36).slice(2);
    const name = url.substring(url.lastIndexOf("/") + 1) || "Playlist";

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        id, _id: id, filename: name, title: name,
        count: parsed.items.length,
        playlist: {
          ...parsed,
          items: parsed.items.map(item => ({ ...item, id: Math.random().toString(36).slice(2) }))
        },
        importDate: new Date().toISOString(),
        lastUsage: new Date().toISOString(),
        favorites: [], autoRefresh: false, url
      }),
    };
  } catch (err) {
    const status = err.message.includes("Timeout") ? 504 : 502;
    return { statusCode: status, headers, body: JSON.stringify({ message: err.message, status }) };
  }
};
/* Vercel adapter */
const _parseHandler = exports.handler;
module.exports = async (req, res) => {
  try {
    const r = await _parseHandler({ httpMethod: req.method, queryStringParameters: req.query, headers: req.headers, body: req.body });
    res.status(r.statusCode || 200);
    for (const [k, v] of Object.entries(r.headers || {})) res.setHeader(k, v);
    res.send(r.isBase64Encoded ? Buffer.from(r.body, 'base64') : r.body);
  } catch(e) { res.status(500).send(e.message); }
};
module.exports.handler = _parseHandler;
