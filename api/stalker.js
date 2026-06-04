const axios = require("axios");

const http = require("http");
const https = require("https");

const profileCache = {};

function magHeaders(mac, token) {
  return {
    "User-Agent": "Mozilla/5.0 (QtEmbedded; U; Linux; C) AppleWebKit/533.3 (KHTML, like Gecko) MAG200 stbapp ver: 2 rev: 250 Safari/533.3",
    "X-User-Agent": "Model: MAG200; Link: Ethernet",
    Cookie: `mac=${mac || ""}; stb_lang=en; timezone=Europe/London`,
    Accept: "*/*",
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };
}

function rawHttpGet(urlStr, mac, token, timeout) {
  return new Promise((resolve, reject) => {
    const u = new URL(urlStr);
    const mod = u.protocol === "https:" ? https : http;
    const opts = {
      hostname: u.hostname,
      port: u.port || (u.protocol === "https:" ? 443 : 80),
      path: u.pathname + u.search,
      method: "GET",
      headers: magHeaders(mac, token),
      rejectUnauthorized: false,
      timeout: timeout || 15000
    };
    const req = mod.request(opts, (resp) => {
      const chunks = [];
      resp.on("data", (c) => chunks.push(c));
      resp.on("end", () => {
        resolve(Buffer.concat(chunks).toString());
      });
    });
    req.on("error", reject);
    req.on("timeout", () => { req.destroy(); reject(new Error("Timeout")); });
    req.end();
  });
}

async function ensureProfile(portalUrl, mac) {
  const key = portalUrl + "|" + mac;
  if (profileCache[key]) return profileCache[key];
  try {
    const handshakeUrl = portalUrl + "?type=stb&prehash=0&action=handshake";
    const hsText = await rawHttpGet(handshakeUrl, mac);
    const hsData = JSON.parse(hsText.trim().replace(/^\/\/[^\n]*\n/, ""));
    const token = (hsData.js && hsData.js.token) || hsData.token;
    if (!token) throw new Error("No token");
    const ts = Date.now();
    const profileUrl = portalUrl + "?type=stb&action=get_profile&JsHttpRequest=" + ts + "-xml&hd=1&ver=" + encodeURIComponent("ImageDescription: 0.2.18-r23-250") + "&num_banks=2&sn=" + encodeURIComponent(require("crypto").createHash("md5").update(mac.replace(/:/g, "").toUpperCase()).digest("hex").slice(0, 13).toUpperCase()) + "&stb_type=MAG250&image_version=218&video_out=hdmi&device_id=" + encodeURIComponent(mac.replace(/:/g, "").toUpperCase().repeat(6).slice(0, 64)) + "&device_id2=" + encodeURIComponent(mac.replace(/:/g, "").toUpperCase().repeat(6).slice(0, 64)) + "&signature=" + encodeURIComponent(mac.replace(/:/g, "").toUpperCase().repeat(6).slice(0, 64)) + "&auth_second_step=1&hw_version=1.7-BD-00&not_valid_token=0&client_type=STB&mac=" + encodeURIComponent(mac);
    await rawHttpGet(profileUrl, mac, token);
    profileCache[key] = token;
    return token;
  } catch (e) {
    profileCache[key] = null;
    return null;
  }
}

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  if (req.method === "OPTIONS") return res.status(200).end();

  const { url, macAddress, token, ...params } = req.query;
  if (!url) return res.status(400).json({ message: "Missing url" });

  const action = params.action || "";
  const needsProfile = !token && ["get_genres", "get_categories", "get_ordered_list", "get_channels"].includes(action);
  let effectiveToken = token;

  if (needsProfile && macAddress) {
    const pt = await ensureProfile(url, macAddress);
    if (pt) effectiveToken = pt;
  }

  if (["get_genres", "get_categories", "get_ordered_list", "get_channels"].includes(action) && !params.JsHttpRequest) {
    params.JsHttpRequest = Date.now() + "-xml";
  }

  try {
    const headers = magHeaders(macAddress, effectiveToken);
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