const http = require("http");
const https = require("https");

function httpGet(urlStr, timeoutMs) {
  return new Promise((resolve, reject) => {
    const u = new URL(urlStr);
    const mod = u.protocol === "https:" ? https : http;
    const req = mod.request({
      hostname: u.hostname, port: u.port || (u.protocol === "https:" ? 443 : 80),
      path: u.pathname + u.search, method: "GET",
      headers: { "User-Agent": "Mozilla/5.0", Accept: "*/*" },
      rejectUnauthorized: false, timeout: timeoutMs || 30000,
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

function parseM3u(body) {
  const lines = body.split("\n");
  const items = [];
  let current = null;
  for (const raw of lines) {
    const line = raw.trim();
    if (line.startsWith("#EXTINF:")) {
      const m = line.match(/#EXTINF:(-?\d+)(?:.*?tvg-id="([^"]*)")?(?:.*?tvg-name="([^"]*)")?(?:.*?tvg-logo="([^"]*)")?(?:.*?group-title="([^"]*)")?(?:.*?,(.+))?/);
      if (m) {
        current = {
          id: Math.random().toString(36).slice(2),
          tvg: { id: m[2] || "", name: m[3] || "", logo: m[4] || "", url: "" },
          group: { title: m[5] || "" },
          name: m[6] || m[3] || "",
          url: "",
          duration: parseInt(m[1]) || -1,
        };
      } else {
        const simple = line.replace("#EXTINF:", "").replace(/^[-\d]+/, "").trim();
        const name = simple.replace(/^.*?,/, "").trim();
        current = {
          id: Math.random().toString(36).slice(2),
          tvg: { id: "", name: "", logo: "", url: "" },
          group: { title: "" },
          name: name || simple,
          url: "",
          duration: -1,
        };
      }
    } else if (line.startsWith("#KODIPROP:") || line.startsWith("#EXTVLCOPT:") || line.startsWith("#EXTGRP:")) {
      // skip
    } else if (line.startsWith("#")) {
      // skip other tags
    } else if (line && current) {
      current.url = line;
      items.push(current);
      current = null;
    }
  }
  return { header: { attrs: {} }, items };
}

module.exports = async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ message: "Missing url" });
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  if (req.method === "OPTIONS") return res.status(200).end();
  try {
    const result = await httpGet(url, 30000);
    const body = result.body;
    const lines = body.split("\n");
    const parsed = parseM3u(lines.join("\n"));
    const id = Math.random().toString(36).slice(2);
    const name = url.substring(url.lastIndexOf("/") + 1) || "Playlist";
    res.json({
      id, _id: id, filename: name, title: name,
      count: parsed.items.length,
      playlist: { ...parsed, items: parsed.items },
      importDate: new Date().toISOString(),
      lastUsage: new Date().toISOString(),
      favorites: [], autoRefresh: false, url
    });
  } catch (err) {
    res.status(500).json({ message: err.message, status: 500 });
  }
};

const _parseExpress = module.exports;
exports.handler = async (event) => {
  const qs = new URL(event.path + "?" + (event.rawQueryString || ""), "http://localhost").searchParams;
  const req = { method: event.httpMethod || "GET", query: Object.fromEntries(qs), headers: event.headers || {}, body: event.body || "" };
  let statusCode = 200, headers = {}, body = "";
  const res = {
    status(code) { statusCode = code; return this; },
    setHeader(k, v) { headers[k] = v; },
    end(b) { body = b || ""; },
    json(obj) { this.setHeader("Content-Type", "application/json"); this.end(JSON.stringify(obj)); },
    send(b) { this.end(b); },
  };
  try { await _parseExpress(req, res); } catch(e) { statusCode = 500; body = e.message; }
  return { statusCode, headers: { ...headers, "Access-Control-Allow-Origin": "*" }, body };
};
