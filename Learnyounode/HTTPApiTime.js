var http = require('http');
var url = require('url');

if (process.argv.length > 2) {
  var server = http.createServer( (req, resp) => {
    if (req.method == 'GET') {
      var reqObj = url.parse(req.url, true);
      var date = new Date(reqObj.query.iso);
      var result = '';

      if (reqObj.pathname == '/api/parsetime') {
        result = JSON.stringify({hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()});
      } else if (reqObj.pathname == '/api/unixtime') {
        result = JSON.stringify({unixtime: date.getTime()});
      }

      if (result) {
        resp.writeHead(200, { 'Content-Type': 'application/json' });
        resp.end(result);
      } else {
        resp.writeHead(404);
        resp.end();
      }
    } else {
      return res.end('send me a GET /api/parsetime?iso= or /api/unixtime?iso=\n');
    }
  });
  server.listen(process.argv[2]);
}
