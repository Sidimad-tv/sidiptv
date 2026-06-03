const axios = require("axios");

function parseXmlStalker(xml) {
  const result = {};
  const stack = [{ obj: result }];
  const tagRe = /<(\/?)(\w+)([^>]*)>/g;
  let lastIdx = 0;
  let m;
  while ((m = tagRe.exec(xml)) !== null) {
    const text = xml.slice(lastIdx, m.index).replace(/<!\[CDATA\[([^\]]*)\]\]>|<!--[\s\S]*?-->/g, "$1").trim();
    if (text && stack.length > 1) {
      const parent = stack[stack.length - 1];
      parent.text = (parent.text || "") + text;
    }
    lastIdx = tagRe.lastIndex;
    if (m[1] === "/") {
      const node = stack.pop();
      if (node) {
        const key = node.key;
        const val = node.text !== void 0 ? node.text : (Object.keys(node.obj).length ? node.obj : "");
        const parent = stack[stack.length - 1];
        if (parent) {
          if (parent.obj[key] !== void 0) {
            if (!Array.isArray(parent.obj[key])) parent.obj[key] = [parent.obj[key]];
            parent.obj[key].push(val);
          } else {
            parent.obj[key] = val;
          }
        }
      }
    } else if (!m[0].endsWith("/>")) {
      const parent = stack[stack.length - 1];
      const key = m[2];
      const newNode = { key, obj: {}, parent: parent.obj };
      stack.push(newNode);
    }
  }
  return result;
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
    if (macAddress) params.mac = macAddress;

    const result = await axios.get(url, {
      params,
      headers,
      timeout: 30000,
      responseType: "text"
    });

    let payload = result.data;
    if (typeof payload === "string") {
      let text = payload.trim();
      if (text.startsWith("<?xml")) {
        const parsed = parseXmlStalker(text);
        if (parsed && Object.keys(parsed).length) {
          text = parsed.response || parsed;
        }
      } else if (text.startsWith("//")) {
        const nl = text.indexOf("\n");
        if (nl > 0) text = text.slice(nl + 1);
      }
      if (typeof text === "string" && (text.startsWith("{") || text.startsWith("["))) {
        try { payload = JSON.parse(text); } catch (_) { payload = text; }
      } else {
        payload = text;
      }
    }

    res.json({ payload, action: params.action });
  } catch (err) {
    console.error("Stalker error:", err.message);
    res.json({
      payload: "",
      message: err.response?.statusText || err.message,
      status: err.response?.status || 404
    });
  }
};