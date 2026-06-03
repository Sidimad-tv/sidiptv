const axios = require("axios");
const urlMod = require("url");

module.exports = async (req, res) => {
  const { url, referer } = req.query;

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS, HEAD");
  res.setHeader("Access-Control-Allow-Headers", "Range, Origin, Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (!url) return res.status(400).send("Missing url");

  try {
    const range = req.headers["range"];
    const headers = {};
    if (referer) headers["Referer"] = referer;
    if (range) headers["Range"] = range;

    const agent = new (require("https").Agent)({ rejectUnauthorized: false });
    const resp = await axios({
      url, method: req.method, headers, responseType: "arraybuffer",
      timeout: 30000, httpsAgent: agent, maxRedirects: 5,
      validateStatus: () => true
    });

    const ct = resp.headers["content-type"] || "";
    const isM3u8 = ct.includes("mpegurl") || ct.includes("m3u") || url.endsWith(".m3u8") || url.includes(".m3u8?");

    res.status(resp.status);
    if (resp.headers["content-type"]) res.setHeader("Content-Type", resp.headers["content-type"]);
    if (resp.headers["content-range"]) res.setHeader("Content-Range", resp.headers["content-range"]);
    if (resp.headers["accept-ranges"]) res.setHeader("Accept-Ranges", resp.headers["accept-ranges"]);

    if (isM3u8) {
      let body = Buffer.from(resp.data).toString("utf8");
      const base = url.substring(0, url.lastIndexOf("/") + 1);
      body = body.split("\n").map(line => {
        const trimmed = line.trim();
        if (trimmed.startsWith("#") || trimmed === "") return line;
        const segmentUrl = trimmed.startsWith("http") ? trimmed : base + trimmed;
        const proxied = "/api/stream?url=" + encodeURIComponent(segmentUrl);
        return referer ? proxied + "&referer=" + encodeURIComponent(referer) : proxied;
      }).join("\n");
      res.setHeader("Content-Length", Buffer.byteLength(body));
      res.send(body);
    } else {
      res.setHeader("Content-Length", resp.data.length);
      res.send(Buffer.from(resp.data));
    }
  } catch (err) {
    res.status(502).send(err.message);
  }
};
