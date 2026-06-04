const axios = require("axios");
const http = require("http");
const https = require("https");

const MAG_UA = "Mozilla/5.0 (QtEmbedded; U; Linux; C) AppleWebKit/533.3 (KHTML, like Gecko) MAG200 stbapp ver: 2 rev: 250 Safari/533.3";
const MAG_HEADERS = (mac, token) => ({
  "User-Agent": MAG_UA,
  "X-User-Agent": "Model: MAG200; Link: Ethernet",
  Cookie: `mac=${mac || ""}; stb_lang=en; timezone=Europe/London`,
  Accept: "*/*",
  ...(token ? { Authorization: `Bearer ${token}` } : {})
});

function stbSerial(mac) {
  return require("crypto").createHash("md5").update(mac.replace(/:/g, "").toUpperCase()).digest("hex").slice(0, 13).toUpperCase();
}

/** Direct HTTP GET (bypasses axios) to perform handshake+profile. */
function rawGet(urlStr, mac, token) {
  return new Promise((resolve, reject) => {
    const u = new URL(urlStr);
    const mod = u.protocol === "https:" ? https : http;
    const req = mod.request({
      hostname: u.hostname, port: u.port || (u.protocol === "https:" ? 443 : 80),
      path: u.pathname + u.search, method: "GET",
      headers: MAG_HEADERS(mac, token), rejectUnauthorized: false, timeout: 12000,
    }, (resp) => {
      const chunks = [];
      resp.on("data", c => chunks.push(c));
      resp.on("end", () => resolve(Buffer.concat(chunks).toString()));
    });
    req.on("error", reject);
    req.on("timeout", () => { req.destroy(); reject(new Error("Timeout")); });
    req.end();
  });
}

/** Try to handshake+profile for portals that need it before data calls. */
async function warmupSession(portalUrl, mac) {
  try {
    const hsUrl = portalUrl + "?type=stb&prehash=0&action=handshake";
    let body = await rawGet(hsUrl, mac);
    body = body.trim().replace(/^\/\/[^\n]*\n/, "");
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
    await rawGet(profileUrl, mac, t);
    return t;
  } catch (e) {
    return null;
  }
}

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  if (req.method === "OPTIONS") return res.status(200).end();

  let { url: rawUrl, macAddress, token, ...params } = req.query;
  if (!rawUrl) return res.status(400).json({ message: "Missing url" });

  // Normalize: ensure URL ends with a .php handler (portal.php or load.php)
  const url = /\.php$/i.test(rawUrl)
    ? rawUrl
    : rawUrl.replace(/(\/?)(\?.*)?$/, (_m, _s, q) => "/portal.php" + (q || ""));

  const action = params.action || "";
  let effectiveToken = token;

  // Auto warmup (handshake+profile) before data calls — always, even with token
  if (["get_genres", "get_categories", "get_ordered_list", "get_channels"].includes(action) && macAddress) {
    const pt = await warmupSession(url.split("?")[0], macAddress);
    if (pt) effectiveToken = pt;
  }

  // Auto inject JsHttpRequest for portals that require it
  if (["get_genres", "get_categories", "get_ordered_list", "get_channels"].includes(action) && !params.JsHttpRequest) {
    params.JsHttpRequest = Date.now() + "-xml";
  }

  try {
    const headers = MAG_HEADERS(macAddress, effectiveToken);
    if (macAddress) params.mac = macAddress;

    const result = await axios.get(url, {
      params,
      headers,
      timeout: 30000,
      responseType: "text"
    });

    let payload = result.data;
    if (typeof payload === "string") {
      payload = payload.trim();
      if (payload.startsWith("//")) {
        const nl = payload.indexOf("\n");
        if (nl > 0) payload = payload.slice(nl + 1).trim();
      }
      if (payload.startsWith("<?xml")) {
        const m = payload.match(/<response[^>]*>([\s\S]*?)<\/response>/i);
        if (m) payload = m[1].trim();
      }
      if (payload.startsWith("{") || payload.startsWith("[")) {
        try { payload = JSON.parse(payload); } catch (_) {}
      }
    }

    res.json({ payload, action: params.action });
  } catch (err) {
    console.error("Stalker error:", err.message);
    res.json({
      payload: "",
      message: err.response?.statusText || err.message,
      status: err.response?.status || 404
    });
  }
};