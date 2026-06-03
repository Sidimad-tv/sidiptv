const axios = require("axios");
const parser = require("iptv-playlist-parser");

module.exports = async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ message: "Missing url" });

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  if (req.method === "OPTIONS") return res.status(200).end();

  try {
    const agent = new (require("https").Agent)({ rejectUnauthorized: false });
    const result = await axios.get(url, { httpsAgent: agent, timeout: 30000 });
    const lines = result.data.split("\n");
    const parsed = parser.parse(lines.join("\n"));
    const id = Math.random().toString(36).slice(2);
    const name = url.substring(url.lastIndexOf("/") + 1) || "Playlist";

    res.json({
      id, _id: id, filename: name, title: name,
      count: parsed.items.length,
      playlist: {
        ...parsed,
        items: parsed.items.map(item => ({ id: Math.random().toString(36).slice(2), ...item }))
      },
      importDate: new Date().toISOString(),
      lastUsage: new Date().toISOString(),
      favorites: [], autoRefresh: false, url
    });
  } catch (err) {
    const status = err.response?.status || 500;
    const message = err.response?.statusText || err.message || "Error fetching playlist";
    res.status(status).json({ message, status });
  }
};
