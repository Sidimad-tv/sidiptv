const axios = require("axios");

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  if (req.method === "OPTIONS") return res.status(200).end();

  const { url, ...params } = req.query;
  if (!url) return res.status(400).json({ message: "Missing url" });

  try {
    const apiPath = "/player_api.php";
    const result = await axios.get(url + apiPath, {
      params,
      timeout: 15000,
      headers: params.macAddress ? { Cookie: `mac=${params.macAddress}` } : {}
    });
    res.json({ payload: result.data, action: params.action });
  } catch (err) {
    res.json({
      message: err.response?.statusText || "Error: not found",
      status: err.response?.status || 404
    });
  }
};
