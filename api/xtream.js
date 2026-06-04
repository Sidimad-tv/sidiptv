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
      timeout: timeoutMs || 15000,
    }, (resp) => {
      const chunks = [];
      resp.on("data", c => chunks.push(c));
      resp.on("end", () => resolve({ status: resp.statusCode, body: Buffer.concat(chunks).toString(), headers: resp.headers }));
    });
    req.on("error", reject);
    req.on("timeout", () => { req.destroy(); reject(new Error("Timeout")); });
    req.end();
  });
}

function buildUrl(base, params) {
  const u = new URL(base);
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null && k !== "url") u.searchParams.set(k, String(v));
  }
  return u.toString();
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
    const apiPath = "/player_api.php";
    const targetUrl = buildUrl(url + apiPath, params);
    const cookieHeaders = params.macAddress ? { "Cookie": `mac=${params.macAddress}` } : {};
    const result = await httpGet(targetUrl, { ...cookieHeaders, "User-Agent": "Mozilla/5.0" }, 15000);

    let payload = result.body;
    try { payload = JSON.parse(payload); } catch (_) {}

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ payload, action: params.action })
    };
  } catch (err) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: err.message, status: 502 })
    };
  }
};
/* Vercel adapter */
const _xtreamHandler = exports.handler;
module.exports = async (req, res) => {
  try {
    const r = await _xtreamHandler({ httpMethod: req.method, queryStringParameters: req.query, headers: req.headers, body: req.body });
    res.status(r.statusCode || 200);
    for (const [k, v] of Object.entries(r.headers || {})) res.setHeader(k, v);
    res.send(r.isBase64Encoded ? Buffer.from(r.body, 'base64') : r.body);
  } catch(e) { res.status(500).send(e.message); }
};
module.exports.handler = _xtreamHandler;
