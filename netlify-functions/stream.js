const http = require("http");
const https = require("https");

const STB_UA = "Mozilla/5.0 (QtEmbedded; U; Linux; C) AppleWebKit/533.3 (KHTML, like Gecko) MAG200 stbapp ver: 2 rev: 250 Safari/533.3";

function fetchStream(urlStr, headers) {
  return new Promise((resolve, reject) => {
    function doFetch(currentUrl, redirects) {
      if (redirects > 5) return reject(new Error("Too many redirects"));
      const u = new URL(currentUrl);
      const mod = u.protocol === "https:" ? https : http;
      const req = mod.request({
        hostname: u.hostname, port: u.port || (u.protocol === "https:" ? 443 : 80),
        path: u.pathname + u.search, method: "GET",
        headers: headers || {}, rejectUnauthorized: false, timeout: 30000,
      }, (resp) => {
        if ([301, 302, 303, 307, 308].includes(resp.statusCode) && resp.headers.location) {
          resp.resume();
          return doFetch(new URL(resp.headers.location, currentUrl).toString(), redirects + 1).then(resolve).catch(reject);
        }
        const ct = (resp.headers["content-type"] || "").toLowerCase();
        const isM3u8 = ct.includes("mpegurl") || ct.includes("m3u") || currentUrl.endsWith(".m3u8") || currentUrl.includes(".m3u8?");
        resolve({ resp, ct, isM3u8, originalUrl: currentUrl });
      });
      req.on("error", reject);
      req.on("timeout", () => { req.destroy(); reject(new Error("Timeout")); });
      req.end();
    }
    doFetch(urlStr, 0);
  });
}

/* Netlify streaming handler using Web API Response */
exports.handler = async (event) => {
  const qParams = event.queryStringParameters || {};
  if (event.rawQueryString && !qParams.url) {
    try { const qs = new URLSearchParams(event.rawQueryString); qs.forEach((v,k) => { if (!qParams[k]) qParams[k]=v; }); } catch(e) {}
  }
  const targetUrl = qParams.url;
  if (!targetUrl) return { statusCode: 400, body: "Missing url", headers: { "Access-Control-Allow-Origin": "*" } };
  const mac = qParams.macAddress || qParams.mac || "";
  const portal = qParams.portal || "";

  try {
    const u = new URL(targetUrl);
    const headers = { "User-Agent": STB_UA, Accept: "*/*" };
    if (u.hostname !== "localhost" && u.hostname !== "127.0.0.1") {
      headers.Referer = portal || u.origin + "/c/";
      headers.Origin = portal ? portal.replace(/\/+$/, "") : u.origin;
    }
    if (mac) headers.Cookie = `mac=${mac}; stb_lang=en; timezone=Europe/London`;

    const { resp, ct, isM3u8, originalUrl } = await fetchStream(targetUrl, headers);

    if (isM3u8) {
      const chunks = [];
      for await (const c of resp) chunks.push(c);
      let body = Buffer.concat(chunks).toString("utf8");
      const base = originalUrl.substring(0, originalUrl.lastIndexOf("/") + 1);
      const lines = body.split("\n").map((line) => {
        const trimmed = line.trim();
        if (trimmed.startsWith("#") || trimmed === "") return line;
        const segUrl = trimmed.startsWith("http") ? trimmed : base + trimmed;
        let proxied = "/api/stream?url=" + encodeURIComponent(segUrl);
        if (mac) proxied += "&macAddress=" + encodeURIComponent(mac);
        if (portal) proxied += "&portal=" + encodeURIComponent(portal);
        return proxied;
      });
      body = lines.join("\n");
      return { statusCode: resp.statusCode, headers: { "Access-Control-Allow-Origin": "*", "Content-Type": ct, "Content-Length": Buffer.byteLength(body) }, body };
    }

    const cType = ct || "video/MP2T";
    /* Return Response with ReadableStream for TS streaming */
    return new Response(new ReadableStream({
      start(controller) {
        resp.on("data", (chunk) => controller.enqueue(chunk));
        resp.on("end", () => controller.close());
        resp.on("error", (e) => controller.error(e));
      }
    }), {
      status: resp.statusCode,
      headers: { "Access-Control-Allow-Origin": "*", "Content-Type": cType, "Cache-Control": "no-cache" }
    });
  } catch (err) {
    return { statusCode: 502, headers: { "Access-Control-Allow-Origin": "*" }, body: "Proxy error: " + err.message };
  }
};
