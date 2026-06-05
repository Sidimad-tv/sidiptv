const http = require("http");
const https = require("https");

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS, HEAD");
  res.setHeader("Access-Control-Allow-Headers", "Range, Origin, Content-Type, Cache-Control");
  if (req.method === "OPTIONS") return res.status(200).end();

  const query = new URL(req.url, "http://localhost").searchParams;
  const targetUrl = query.get("url");
  if (!targetUrl) return res.status(400).send("Missing url");

  const mac = query.get("macAddress") || query.get("mac") || "";
  const portal = query.get("portal") || "";

  let redirectCount = 0;
  let lastError = null;

  function doFetch(currentUrl) {
    return new Promise((resolve, reject) => {
      if (redirectCount > 5) {
        return reject(new Error("Too many redirects"));
      }

      let u;
      try { u = new URL(currentUrl); } catch (e) { return reject(new Error("Invalid URL")); }
      const mod = u.protocol === "https:" ? https : http;

      const headers = {
        "User-Agent": "Mozilla/5.0 (QtEmbedded; U; Linux; C) AppleWebKit/533.3 (KHTML, like Gecko) MAG200 stbapp ver: 2 rev: 250 Safari/533.3",
        Accept: "*/*",
      };
      if (u.hostname !== "localhost" && u.hostname !== "127.0.0.1") {
        headers.Referer = portal || u.origin + "/c/";
        headers.Origin = portal ? portal.replace(/\/+$/, "") : u.origin;
      }
      if (mac) headers.Cookie = `mac=${mac}; stb_lang=en; timezone=Europe/London`;

      const range = req.headers["range"];
      if (range) headers["Range"] = range;

      const opts = {
        hostname: u.hostname,
        port: u.port || (u.protocol === "https:" ? 443 : 80),
        path: u.pathname + u.search,
        method: req.method || "GET",
        headers,
        rejectUnauthorized: false,
        timeout: 30000,
      };

      const proxyReq = mod.request(opts, (proxyRes) => {
        if ([301, 302, 303, 307, 308].includes(proxyRes.statusCode) && proxyRes.headers.location) {
          proxyRes.resume();
          const nextUrl = new URL(proxyRes.headers.location, currentUrl).toString();
          redirectCount++;
          doFetch(nextUrl).then(resolve).catch(reject);
          return;
        }

        const responseHeaders = { "Access-Control-Allow-Origin": "*" };
        const ct = proxyRes.headers["content-type"];
        if (ct) responseHeaders["Content-Type"] = ct;
        if (proxyRes.headers["content-range"]) responseHeaders["Content-Range"] = proxyRes.headers["content-range"];
        if (proxyRes.headers["accept-ranges"]) responseHeaders["Accept-Ranges"] = proxyRes.headers["accept-ranges"];
        if (proxyRes.headers["content-length"]) responseHeaders["Content-Length"] = proxyRes.headers["content-length"];

        const isM3u8 = (ct && (ct.includes("mpegurl") || ct.includes("m3u"))) || currentUrl.endsWith(".m3u8") || currentUrl.includes(".m3u8?");

        if (isM3u8) {
          let body = "";
          proxyRes.setEncoding("utf8");
          proxyRes.on("data", (chunk) => { body += chunk; });
          proxyRes.on("end", () => {
            const base = currentUrl.substring(0, currentUrl.lastIndexOf("/") + 1);
            const lines = body.split("\n").map((line) => {
              const trimmed = line.trim();
              if (trimmed.startsWith("#") || trimmed === "") return line;
              const segmentUrl = trimmed.startsWith("http") ? trimmed : base + trimmed;
              let proxied = "/api/stream?url=" + encodeURIComponent(segmentUrl);
              if (mac) proxied += "&macAddress=" + encodeURIComponent(mac);
              if (portal) proxied += "&portal=" + encodeURIComponent(portal);
              return proxied;
            });
            body = lines.join("\n");
            responseHeaders["Content-Length"] = Buffer.byteLength(body);
            res.writeHead(proxyRes.statusCode, responseHeaders);
            res.end(body);
            resolve();
          });
        } else {
          res.writeHead(proxyRes.statusCode, responseHeaders);
          proxyRes.pipe(res);
          proxyRes.on("end", resolve);
        }
      });

      proxyReq.on("error", (err) => {
        lastError = err;
        if (!res.headersSent) res.status(502).send("Proxy error: " + err.message);
        reject(err);
      });

      proxyReq.on("timeout", () => {
        proxyReq.destroy();
        if (!res.headersSent) res.status(504).send("Proxy timeout");
        reject(new Error("Timeout"));
      });

      proxyReq.end();
    });
  }

  try {
    await doFetch(targetUrl);
  } catch (err) {
    if (!res.headersSent) {
      res.status(502).send(lastError ? "Proxy: " + lastError.message : err.message);
    }
  }
};
