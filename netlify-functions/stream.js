const http = require("http");
const https = require("https");

const STB_UA = "Mozilla/5.0 (QtEmbedded; U; Linux; C) AppleWebKit/533.3 (KHTML, like Gecko) MAG200 stbapp ver: 2 rev: 250 Safari/533.3";

function httpGet(urlStr, headers, timeoutMs, redirects) {
  redirects = redirects || 0;
  if (redirects > 5) return Promise.reject(new Error("Too many redirects"));
  return new Promise((resolve, reject) => {
    const u = new URL(urlStr);
    const mod = u.protocol === "https:" ? https : http;
    const req = mod.request({
      hostname: u.hostname, port: u.port || (u.protocol === "https:" ? 443 : 80),
      path: u.pathname + u.search, method: "GET",
      headers: headers || {}, rejectUnauthorized: false, timeout: timeoutMs || 12000,
    }, (resp) => {
      if ([301, 302, 303, 307, 308].includes(resp.statusCode) && resp.headers.location) {
        resp.resume();
        const nextUrl = new URL(resp.headers.location, urlStr).toString();
        return httpGet(nextUrl, headers, timeoutMs, redirects + 1).then(resolve).catch(reject);
      }
      const chunks = [];
      resp.on("data", c => chunks.push(c));
      resp.on("end", () => resolve({ status: resp.statusCode, headers: resp.headers, body: Buffer.concat(chunks) }));
    });
    req.on("error", reject);
    req.on("timeout", () => { req.destroy(); reject(new Error("Timeout")); });
    req.end();
  });
}

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
    const mod = u.protocol === "https:" ? https : http;
    const headers = { "User-Agent": STB_UA, Accept: "*/*" };
    if (u.hostname !== "localhost" && u.hostname !== "127.0.0.1") {
      headers.Referer = portal || u.origin + "/c/";
      headers.Origin = portal ? portal.replace(/\/+$/, "") : u.origin;
    }
    if (mac) headers.Cookie = `mac=${mac}; stb_lang=en; timezone=Europe/London`;

    const resp = await httpGet(targetUrl, headers, 30000);
    const ct = (resp.headers["content-type"] || "").toLowerCase();
    const isM3u8 = ct.includes("mpegurl") || ct.includes("m3u") || targetUrl.endsWith(".m3u8") || targetUrl.includes(".m3u8?");
    const responseHeaders = { "Access-Control-Allow-Origin": "*", "Content-Type": ct };

    if (isM3u8) {
      let body = resp.body.toString("utf8");
      const base = targetUrl.substring(0, targetUrl.lastIndexOf("/") + 1);
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
      responseHeaders["Content-Length"] = Buffer.byteLength(body);
      return { statusCode: resp.status, headers: responseHeaders, body };
    }

    return {
      statusCode: resp.status,
      headers: responseHeaders,
      body: resp.body.toString("base64"),
      isBase64Encoded: true,
    };
  } catch (err) {
    return { statusCode: 502, headers: { "Access-Control-Allow-Origin": "*" }, body: "Proxy error: " + err.message };
  }
};
