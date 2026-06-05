const expressHandler = require("../api/xtream.js");

function buildReq(event) {
  const qs = new URL(event.path + "?" + (event.rawQueryString || ""), "http://localhost").searchParams;
  return {
    method: event.httpMethod || "GET",
    query: Object.fromEntries(qs),
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
