const http = require("http");
const https = require("https");

const STB_UA = "Mozilla/5.0 (QtEmbedded; U; Linux; C) AppleWebKit/533.3 (KHTML, like Gecko) MAG200 stbapp ver: 2 rev: 250 Safari/533.3";

function resolveRedirect(urlStr, headers, maxRedirects) {
  return new Promise((resolve, reject) => {
    function follow(currentUrl, depth) {
      if (depth > maxRedirects) return reject(new Error("Too many redirects"));
      const u = new URL(currentUrl);
      const mod = u.protocol === "https:" ? https : http;
      const req = mod.request({
        hostname: u.hostname, port: u.port || (u.protocol === "https:" ? 443 : 80),
        path: u.pathname + u.search, method: "GET",
        headers: headers || {}, rejectUnauthorized: false, timeout: 15000,
      }, (resp) => {
        if ([301, 302, 303, 307, 308].includes(resp.statusCode) && resp.headers.location) {
          resp.resume();
          return follow(new URL(resp.headers.location, currentUrl).toString(), depth + 1).then(resolve).catch(reject);
        }
        resp.resume();
        resolve(currentUrl);
      });
      req.on("error", reject);
      req.on("timeout", () => { req.destroy(); reject(new Error("Timeout")); });
      req.end();
    }
    follow(urlStr, 0);
  });
}

function fetchM3u8(urlStr, headers) {
  return new Promise((resolve, reject) => {
    const u = new URL(urlStr);
    const mod = u.protocol === "https:" ? https : http;
    let body = "";
    const req = mod.request({
      hostname: u.hostname, port: u.port || (u.protocol === "https:" ? 443 : 80),
      path: u.pathname + u.search, method: "GET",
      headers, rejectUnauthorized: false, timeout: 15000,
    }, (resp) => {
      resp.setEncoding("utf8");
      resp.on("data", (c) => body += c);
      resp.on("end", () => resolve({ status: resp.statusCode, body }));
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
  if (!targetUrl) return { statusCode: 400, headers: { "Access-Control-Allow-Origin": "*" }, body: "Missing url" };
  if (targetUrl.indexOf("http:") !== 0 && targetUrl.indexOf("https:") !== 0) {
    return { statusCode: 400, headers: { "Access-Control-Allow-Origin": "*" }, body: "Invalid url" };
  }

  const mac = qParams.macAddress || qParams.mac || "";
  const portal = qParams.portal || "";
  const u = new URL(targetUrl);
  const headers = { "User-Agent": STB_UA, Accept: "*/*" };
  if (u.hostname !== "localhost" && u.hostname !== "127.0.0.1") {
    headers.Referer = portal || u.origin + "/c/";
    headers.Origin = portal ? portal.replace(/\/+$/, "") : u.origin;
  }
  if (mac) headers.Cookie = `mac=${mac}; stb_lang=en; timezone=Europe/London`;

  /* m3u8: buffer and rewrite segments to go through proxy */
  if (targetUrl.indexOf(".m3u8") !== -1 || (u.pathname + u.search).indexOf("m3u8") !== -1) {
    try {
      const result = await fetchM3u8(targetUrl, headers);
      const base = targetUrl.substring(0, targetUrl.lastIndexOf("/") + 1);
      const lines = result.body.split("\n").map((line) => {
        const trimmed = line.trim();
        if (trimmed.startsWith("#") || trimmed === "") return line;
        const segUrl = trimmed.startsWith("http") ? trimmed : base + trimmed;
        let proxied = "/api/stream?url=" + encodeURIComponent(segUrl);
        if (mac) proxied += "&macAddress=" + encodeURIComponent(mac);
        if (portal) proxied += "&portal=" + encodeURIComponent(portal);
        return proxied;
      });
      const body = lines.join("\n");
      return { statusCode: result.status, headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/vnd.apple.mpegurl", "Content-Length": Buffer.byteLength(body) }, body };
    } catch(e) {
      return { statusCode: 502, headers: { "Access-Control-Allow-Origin": "*" }, body: "m3u8 error: " + e.message };
    }
  }

  /* TS/other: follow portal redirect chain, return 302 to client */
  try {
    const finalUrl = await resolveRedirect(targetUrl, headers, 5);
    return { statusCode: 302, headers: { "Access-Control-Allow-Origin": "*", Location: finalUrl }, body: "" };
  } catch (err) {
    return { statusCode: 302, headers: { "Access-Control-Allow-Origin": "*", Location: targetUrl }, body: "" };
  }
};
