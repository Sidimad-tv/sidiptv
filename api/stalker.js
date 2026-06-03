const axios = require("axios");

function xmlToObj(xml) {
  const text = xml.replace(/<\?[^>]+\?>|<!\[CDATA\[([^\]]*)\]\]>/g, "$1").trim();
  const root = { __children: [], __text: "" };
  const stack = [root];
  const tagRe = /<(\/?)(\w+)([^>]*)>/g;
  let last = 0;
  let m;
  while ((m = tagRe.exec(text)) !== null) {
    const between = text.slice(last, m.index);
    last = tagRe.lastIndex;
    if (between.trim()) {
      stack[stack.length - 1].__text = between.trim();
    }
    if (m[1] === "/") {
      stack.pop();
    } else if (!m[0].endsWith("/>")) {
      const tag = m[2];
      const parent = stack[stack.length - 1];
      const child = { __tag: tag, __children: [], __text: "" };
      const existing = parent.__children.filter(c => c.__tag === tag);
      if (existing.length > 0) {
        if (!parent.__arr) parent.__arr = {};
        if (!parent.__arr[tag]) parent.__arr[tag] = [existing[0]];
        child.__idx = parent.__arr[tag].length;
        parent.__arr[tag].push(child);
      }
      parent.__children.push(child);
      stack.push(child);
    }
  }
  function build(node) {
    const obj = {};
    const arrs = node.__arr || {};
    const grouped = {};
    for (const child of node.__children) {
      const tag = child.__tag;
      if (arrs[tag] && child.__idx !== void 0) {
        if (!grouped[tag]) grouped[tag] = [];
        const idx = child.__idx;
        if (!grouped[tag][idx]) grouped[tag][idx] = build(child);
      } else if (arrs[tag]) {
        if (!grouped[tag]) grouped[tag] = [];
        grouped[tag].push(build(child));
      } else if (grouped[tag] !== void 0) {
        if (!Array.isArray(grouped[tag])) grouped[tag] = [grouped[tag]];
        grouped[tag].push(build(child));
      } else {
        grouped[tag] = build(child);
      }
    }
    if (node.__text && Object.keys(grouped).length === 0) return node.__text;
    if (Object.keys(grouped).length > 0) return grouped;
    return node.__text || "";
  }
  const result = build(root);
  if (typeof result === "object" && !Array.isArray(result)) {
    const keys = Object.keys(result);
    if (keys.length === 1) return result[keys[0]];
  }
  return result;
}

function parseStalkerResponse(data) {
  if (typeof data === "string" && data.trim().startsWith("<?xml")) {
    try { return xmlToObj(data); } catch (_) {}
  }
  if (typeof data === "string" && data.trim().startsWith("//")) {
    const nl = data.indexOf("\n");
    if (nl > 0) {
      try { return JSON.parse(data.slice(nl + 1)); } catch (_) {}
    }
  }
  return data;
}

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  if (req.method === "OPTIONS") return res.status(200).end();

  const { url, macAddress, token, ...params } = req.query;
  if (!url) return res.status(400).json({ message: "Missing url" });

  try {
    const headers = { Cookie: `mac=${macAddress || ""}` };
    if (token) headers["Authorization"] = `Bearer ${token}`;

    const result = await axios.get(url, {
      params,
      headers,
      timeout: 30000,
      responseType: "text"
    });
    const payload = parseStalkerResponse(result.data);
    res.json({ payload, action: params.action });
  } catch (err) {
    console.error("Stalker error:", err.message);
    res.json({
      message: err.response?.statusText || "Error: not found",
      status: err.response?.status || 404
    });
  }
};