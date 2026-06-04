const axios = require("axios");

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  if (req.method === "OPTIONS") return res.status(200).end();

  const { url, macAddress, token, ...params } = req.query;
  if (!url) return res.status(400).json({ message: "Missing url" });

  try {
    const headers = { Cookie: `mac=${macAddress || ""}` };
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