const http = require('http');
const https = require('https');
const url = require('url');

function sendJson(res, status, data) {
  res.writeHead(status, {'Content-Type':'application/json','Access-Control-Allow-Origin':'*'});
  res.end(JSON.stringify(data));
}

function stbHeaders(mac, token) {
  var h = {
    'User-Agent':'Mozilla/5.0 (QtEmbedded; U; Linux; C) AppleWebKit/533.3 (KHTML, like Gecko) MAG200 stbapp ver: 2 rev: 250 Safari/533.3',
    'X-User-Agent':'Model: MAG250; Link: Ethernet',
    'Accept':'*/*',
    'Cookie':'mac='+mac+'; stb_lang=en; timezone=Europe/London'+(token?'; token='+token:''),
  };
  if(token) h['Authorization']='Bearer '+token;
  return h;
}

function proxyRequest(res, targetUrl, mac, token) {
  var uobj=new URL(targetUrl);
  var mod=uobj.protocol==='https:'?https:http;
  var opts={
    hostname:uobj.hostname,port:uobj.port||(uobj.protocol==='https:'?443:80),
    path:uobj.pathname+uobj.search,method:'GET',
    headers:stbHeaders(mac,token),rejectUnauthorized:false,timeout:30000,
  };
  var prec=mod.request(opts,function(pres){
    var ct=pres.headers['content-type']||'application/octet-stream';
    res.writeHead(pres.statusCode,{'Content-Type':ct,'Access-Control-Allow-Origin':'*'});
    pres.pipe(res);
  });
  prec.on('error',function(e){sendJson(res,502,{error:e.message})});
  prec.end();
}

function handleRequest(method, reqPath, query, res) {
  if(method==='OPTIONS'){
    res.writeHead(204,{'Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'GET,POST,OPTIONS','Access-Control-Allow-Headers':'Content-Type'});
    return res.end();
  }

  if(reqPath==='/api/stalker/proxy'&&method==='GET'){
    if(!query.url) return sendJson(res,400,{error:'url required'});
    proxyRequest(res,query.url,query.mac||'',query.token||'');
  }

  else if(reqPath==='/api/xtream/stream'&&method==='GET'){
    if(!query.url) return sendJson(res,400,{error:'url required'});
    proxyRequest(res,query.url,query.mac||'','');
  }

  else if(reqPath==='/api/m3u/fetch'&&method==='GET'){
    if(!query.url) return sendJson(res,400,{error:'url required'});
    proxyRequest(res,query.url,query.mac||'','');
  }

  else {
    sendJson(res,404,{error:'Not found'});
  }
}

/* Vercel handler (req/res) */
function vercelHandler(req, res) {
  var reqPath = url.parse(req.url).pathname;
  var query = url.parse(req.url, true).query;
  handleRequest(req.method.toUpperCase(), reqPath, query, res);
}

module.exports = vercelHandler;

/* Netlify handler (event/context) */
exports.handler = async function(event) {
  return new Promise(function(resolve) {
    var reqPath = url.parse(event.path).pathname;
    var query = {};
    if (event.queryStringParameters) {
      for (var k in event.queryStringParameters) query[k] = event.queryStringParameters[k];
    }
    var body = '';
    var headers = { 'Access-Control-Allow-Origin': '*' };
    var statusCode = 200;

    var res = {
      writeHead: function(status, h) {
        statusCode = status;
        if (h) { for (var k in h) headers[k] = h[k]; }
      },
      write: function(chunk) { body += chunk; },
      end: function(chunk) {
        if (chunk) body += chunk;
        resolve({ statusCode: statusCode, headers: headers, body: body });
      },
    };

    try {
      handleRequest(event.httpMethod, reqPath, query, res);
    } catch(e) {
      resolve({ statusCode: 500, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ error: e.message }) });
    }
  });
};
