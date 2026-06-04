const axios = require("axios");

const MAG_UA = "Mozilla/5.0 (QtEmbedded; U; Linux; C) AppleWebKit/533.3 (KHTML, like Gecko) MAG200 stbapp ver: 2 rev: 250 Safari/533.3";

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  if (req.method === "OPTIONS") return res.status(200).end();

  const { url, macAddress, token, ...params } = req.query;
  if (!url) return res.status(400).json({ message: "Missing url" });

  const action = params.action || "";

  if (["get_genres", "get_categories", "get_ordered_list", "get_channels"].includes(action) && !params.JsHttpRequest) {
    params.JsHttpRequest = Date.now() + "-xml";
  }

  try {
    const headers = {
      "User-Agent": MAG_UA,
      "X-User-Agent": "Model: MAG200; Link: Ethernet",
      Cookie: `mac=${macAddress || ""}; stb_lang=en; timezone=Europe/London`,
      Accept: "*/*"
    };
    if (token) headers["Authorization"] = `Bearer ${token}`;
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