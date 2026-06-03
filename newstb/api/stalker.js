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

    const result = await axios.get(url, {
      params,
      headers,
      timeout: 30000
    });
    res.json({ payload: result.data, action: params.action });
  } catch (err) {
    console.error("Stalker error:", err.message);
    res.json({
      message: err.response?.statusText || "Error: not found",
      status: err.response?.status || 404
    });
  }
};
