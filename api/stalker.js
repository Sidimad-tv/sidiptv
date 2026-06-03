const axios = require("axios");
const { XMLParser } = require("fast-xml-parser");

const xmlParser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  textNodeName: "#text",
  parseAttributeValue: true,
  trimValues: true
});

function parseStalkerResponse(data) {
  if (typeof data === "string" && data.trim().startsWith("<?xml")) {
    try {
      const parsed = xmlParser.parse(data);
      return parsed?.response ?? parsed;
    } catch (_) {}
  }
  if (typeof data === "string" && data.trim().startsWith("//")) {
    const jsonStart = data.indexOf("\n");
    if (jsonStart > 0) {
      try { return JSON.parse(data.slice(jsonStart + 1)); } catch (_) {}
    }
  }
  return data;
}

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  if (req.method === "OPTIONS") return res.status(200).end();

  const { url, macAddress, token, ...params } = req.query;
  if (!url) return res.status(400).json({ message: "Missing url" });

  try {
    const headers = { Cookie: `mac=${macAddress || ""}` };
    if (token) headers["Authorization"] = `Bearer ${token}`;

    const result = await axios.get(url, {
      params,
      headers,
      timeout: 30000,
      responseType: "text"
    });
    const payload = parseStalkerResponse(result.data);
    res.json({ payload, action: params.action });
  } catch (err) {
    console.error("Stalker error:", err.message);
    res.json({
      message: err.response?.statusText || "Error: not found",
      status: err.response?.status || 404
    });
  }
};
