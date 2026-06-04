const http = require("http");
const https = require("https");

const MAG_UA = "Mozilla/5.0 (QtEmbedded; U; Linux; C) AppleWebKit/533.3 (KHTML, like Gecko) MAG200 stbapp ver: 2 rev: 250 Safari/533.3";

function fetchUrl(currentUrl, rangeHeader, mac, portal, token) {
  return new Promise((resolve, reject) => {
    const u = new URL(currentUrl);
    const mod = u.protocol === "https:" ? https : http;
    const headers = {
      "User-Agent": MAG_UA,
      "X-User-Agent": "Model: MAG200; Link: Ethernet",
      "Accept": "*/*",
    };
    if (rangeHeader) headers["Range"] = rangeHeader;
    if (u.hostname !== "localhost" && u.hostname !== "127.0.0.1") {
      headers["Referer"] = portal || u.origin + "/c/";
      headers["Origin"] = portal ? portal.replace(/\/+$/, "") : u.origin;
    }
    if (mac) headers["Cookie"] = "mac=" + mac + "; stb_lang=en; timezone=Europe/London";
    if (token) headers["Authorization"] = "Bearer " + token;

    const opts = {
      hostname: u.hostname,
      port: u.port || (u.protocol === "https:" ? 443 : 80),
      path: u.pathname + u.search,
      method: "GET",
      headers,
      rejectUnauthorized: false,
      timeout: 30000,
    };

    mod.request(opts, (proxyRes) => {
      const chunks = [];
      proxyRes.on("data", c => chunks.push(c));
      proxyRes.on("end", () => {
        resolve({
          status: proxyRes.statusCode,
          body: Buffer.concat(chunks),
          contentType: proxyRes.headers["content-type"] || "",
          contentRange: proxyRes.headers["content-range"] || "",
          acceptRanges: proxyRes.headers["accept-ranges"] || "",
          headers: proxyRes.headers,
        });
      });
    }).on("error", reject).on("timeout", function() { this.destroy(); reject(new Error("Timeout")); }).end();
  });
}

async function doFetchWithRedirects(targetUrl, redirectCount, mac, portal, token) {
  if (redirectCount > 5) throw new Error("Too many redirects");
  const res = await fetchUrl(targetUrl, "", mac, portal, token);
  if ([301, 302, 303, 307, 308].includes(res.status) && res.headers.location) {
    return doFetchWithRedirects(new URL(res.headers.location, targetUrl).toString(), redirectCount + 1, mac, portal, token);
  }
  return res;
}

function rewriteM3u8(body, baseUrl, mac, portal) {
  const base = baseUrl.substring(0, baseUrl.lastIndexOf("/") + 1);
  const lines = body.toString("utf8").split("\n").map(line => {
    const trimmed = line.trim();
    if (trimmed.startsWith("#") || trimmed === "") return line;
    const segmentUrl = trimmed.startsWith("http") ? trimmed : base + trimmed;
    let proxied = "/api/stream?url=" + encodeURIComponent(segmentUrl);
    if (mac) proxied += "&macAddress=" + encodeURIComponent(mac);
    if (portal) proxied += "&portal=" + encodeURIComponent(portal);
    return proxied;
  });
  return Buffer.from(lines.join("\n"), "utf8");
}

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS, HEAD",
    "Access-Control-Allow-Headers": "Range, Origin, Content-Type, Cache-Control",
  };
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  const params = event.queryStringParameters || {};
  const targetUrl = params.url;
  if (!targetUrl) {
    return { statusCode: 400, headers, body: "Missing url" };
  }

  const mac = params.macAddress || params.mac || "";
  const portal = params.portal || "";

  try {
    const rangeHeader = event.headers?.range || event.headers?.Range || event.multiValueHeaders?.range?.[0] || "";
    const result = await doFetchWithRedirects(targetUrl, 0, mac, portal);
    const isM3u8 = (result.contentType && (result.contentType.includes("mpegurl") || result.contentType.includes("m3u"))) ||
      targetUrl.endsWith(".m3u8") || targetUrl.includes(".m3u8?");

    const responseHeaders = { "Access-Control-Allow-Origin": "*" };
    if (result.contentType) responseHeaders["Content-Type"] = result.contentType;
    if (result.contentRange) responseHeaders["Content-Range"] = result.contentRange;
    if (result.acceptRanges) responseHeaders["Accept-Ranges"] = result.acceptRanges;

    let body;
    if (isM3u8) {
      body = rewriteM3u8(result.body, targetUrl, mac, portal);
      responseHeaders["Content-Length"] = body.length;
    } else {
      body = result.body;
      responseHeaders["Content-Length"] = body.length;
    }

    return {
      statusCode: result.status,
      headers: responseHeaders,
      body: body.toString("base64"),
      isBase64Encoded: true,
    };
  } catch (err) {
    return {
      statusCode: 502,
      headers,
      body: "Proxy: " + err.message,
    };
  }
};
