const expressHandler = require("../api/stalker.js");

function buildReq(event) {
  const query = event.queryStringParameters || {};
  /* Also parse from rawQueryString for URLs with special chars */
  if (event.rawQueryString) {
    try {
      const qs = new URLSearchParams(event.rawQueryString);
      qs.forEach((v, k) => { if (!query[k]) query[k] = v; });
    } catch(e) {}
  }
  return {
    method: event.httpMethod || "GET",
    query,
    headers: event.headers || {},
    body: event.body || "",
  };
}

function buildRes() {
  let statusCode = 200, headers = {}, body = "";
  return {
    status(code) { statusCode = code; return this; },
    setHeader(k, v) { headers[k] = v; },
    end(b) { body = b || ""; },
    json(obj) { this.setHeader("Content-Type", "application/json"); this.end(JSON.stringify(obj)); },
    send(b) { this.end(b); },
    _getResult() { return { statusCode, headers, body }; },
  };
}

exports.handler = async (event) => {
  const req = buildReq(event);
  const res = buildRes();
  try {
    await expressHandler(req, res);
  } catch (e) {
    return { statusCode: 500, headers: { "Access-Control-Allow-Origin": "*" }, body: e.message };
  }
  const result = res._getResult();
  return { ...result, headers: { ...result.headers, "Access-Control-Allow-Origin": "*" } };
};
