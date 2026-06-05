const http = require("http");
const https = require("https");
const crypto = require("crypto");

const MAG_UA = "Mozilla/5.0 (QtEmbedded; U; Linux; C) AppleWebKit/533.3 (KHTML, like Gecko) MAG200 stbapp ver: 2 rev: 250 Safari/533.3";
const MAG_HEADERS = (mac, token) => ({
  "User-Agent": MAG_UA,
  "X-User-Agent": "Model: MAG200; Link: Ethernet",
  "Cookie": `mac=${mac || ""}; stb_lang=en; timezone=Europe/London`,
  "Accept": "*/*",
  ...(token ? { "Authorization": `Bearer ${token}` } : {})
});

function stbSerial(mac) {
  return crypto.createHash("md5").update(mac.replace(/:/g, "").toUpperCase()).digest("hex").slice(0, 13).toUpperCase();
}

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
      timeout: timeoutMs || 12000,
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

async function warmupSession(portalUrl, mac) {
  try {
    const hsUrl = portalUrl + "?type=stb&prehash=0&action=handshake";
    let r = await httpGet(hsUrl, MAG_HEADERS(mac));
    let body = r.body.trim().replace(/^\/\/[^\n]*\n/, "");
    const d = JSON.parse(body);
    const t = (d.js && d.js.token) || d.token;
    if (!t) return null;
    const ts = Date.now();
    const di = mac.replace(/:/g, "").toUpperCase();
    const sn = stbSerial(mac);
    const profileUrl = portalUrl + "?type=stb&action=get_profile&JsHttpRequest=" + ts + "-xml" +
      "&hd=1&num_banks=2&sn=" + sn + "&stb_type=MAG250&image_version=218&video_out=hdmi" +
      "&device_id=" + di + "&device_id2=" + di + "&signature=" + di +
      "&auth_second_step=1&hw_version=1.7-BD-00&not_valid_token=0&client_type=STB&mac=" + encodeURIComponent(mac);
    await httpGet(profileUrl, MAG_HEADERS(mac, t));
    return t;
  } catch (e) {
    return null;
  }
}

function cleanBody(body) {
  let s = body.trim();
  if (s.startsWith("//")) { const nl = s.indexOf("\n"); if (nl > 0) s = s.slice(nl + 1).trim(); }
  if (s.startsWith("<?xml")) { const m = s.match(/<response[^>]*>([\s\S]*?)<\/response>/i); if (m) s = m[1].trim(); }
  if (s.startsWith("{") || s.startsWith("[")) { try { s = JSON.parse(s); } catch (_) {} }
  return s;
}

function buildUrl(base, params) {
  const u = new URL(base);
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null) u.searchParams.set(k, String(v));
  }
  return u.toString();
}

/* Express handler (Vercel / local) */
module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  if (req.method === "OPTIONS") return res.status(200).end();

  let { url: rawUrl, macAddress, token, ...params } = req.query;
  if (!rawUrl) return res.status(400).json({ message: "Missing url" });

  const action = params.action || "";
  const urlBase = rawUrl.split("?")[0];
  const url = /\.php$/i.test(urlBase)
    ? rawUrl
    : rawUrl.replace(/(\/?)(\?.*)?$/, (_m, _s, q) => "/portal.php" + (q || ""));

  const baseUrl = action === "create_link" ? url.split("?")[0] : url;
  const baseRaw = rawUrl.split("?")[0];
  let effectiveToken = token;
  const bareUrl = !baseRaw.slice(baseRaw.indexOf("//") + 2).includes("/");
  const needsWarmup = (["get_genres", "get_categories", "get_ordered_list", "get_channels"].includes(action)) ||
    (action === "create_link" && bareUrl);
  if (needsWarmup && macAddress) {
    const pt = await warmupSession(baseUrl, macAddress);
    if (pt) effectiveToken = pt;
  }

  const fetchParams = { ...params };
  if (["get_genres", "get_categories", "get_ordered_list", "get_channels"].includes(action) && !fetchParams.JsHttpRequest) {
    fetchParams.JsHttpRequest = Date.now() + "-xml";
  }
  if (macAddress) fetchParams.mac = macAddress;
  delete fetchParams.url;
  delete fetchParams.token;
  delete fetchParams.macAddress;

  try {
    const targetUrl = buildUrl(action === "create_link" ? baseUrl : url, fetchParams);
    const magHeaders = MAG_HEADERS(macAddress, effectiveToken);
    const result = await httpGet(targetUrl, magHeaders, 25000);

    let payload = cleanBody(result.body);

    if (action === "create_link" && !needsWarmup && macAddress && (!payload?.js?.cmd && !payload?.cmd)) {
      const pt = await warmupSession(baseUrl, macAddress);
      if (pt) {
        const retryHeaders = MAG_HEADERS(macAddress, pt);
        const retryUrl = buildUrl(baseUrl, fetchParams);
        const retryResult = await httpGet(retryUrl, retryHeaders, 25000);
        const retryPayload = cleanBody(retryResult.body);
        if (retryPayload?.js?.cmd || retryPayload?.cmd) payload = retryPayload;
      }
    }

    res.json({ payload, action: params.action });
  } catch (err) {
    console.error("Stalker error:", err.message);
    res.json({ payload: "", message: err.message, status: 502 });
  }
};

/* Netlify Lambda wrapper */
const _stalkerExpress = module.exports;
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
  try { await _stalkerExpress(req, res); } catch(e) { statusCode = 500; body = e.message; }
  return { statusCode, headers: { ...headers, "Access-Control-Allow-Origin": "*" }, body };
};
