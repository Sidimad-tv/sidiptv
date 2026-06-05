const http = require("http");
const https = require("https");

function httpGet(urlStr, timeoutMs, extraHeaders) {
  return new Promise((resolve, reject) => {
    const u = new URL(urlStr);
    const mod = u.protocol === "https:" ? https : http;
    const req = mod.request({
      hostname: u.hostname, port: u.port || (u.protocol === "https:" ? 443 : 80),
      path: u.pathname + u.search, method: "GET",
      headers: { "User-Agent": "Mozilla/5.0", Accept: "*/*", ...(extraHeaders || {}) },
      rejectUnauthorized: false, timeout: timeoutMs || 15000,
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

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  if (req.method === "OPTIONS") return res.status(200).end();
  const { url, ...params } = req.query;
  if (!url) return res.status(400).json({ message: "Missing url" });
  try {
    const apiPath = "/player_api.php";
    const targetUrl = url + apiPath + "?" + new URLSearchParams(params).toString();
    const headers = params.macAddress ? { Cookie: `mac=${params.macAddress}` } : {};
    const result = await httpGet(targetUrl, 15000, headers);
    let payload;
    try { payload = JSON.parse(result.body); } catch (e) { payload = result.body; }
    res.json({ payload, action: params.action });
  } catch (err) {
    res.json({ message: err.message || "Error: not found", status: 404 });
  }
};

const _xtreamExpress = module.exports;
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
  try { await _xtreamExpress(req, res); } catch(e) { statusCode = 500; body = e.message; }
  return { statusCode, headers: { ...headers, "Access-Control-Allow-Origin": "*" }, body };
};
