var http = require('http');
var map = require('through2-map');

if (process.argv.length > 2) {
  var server = http.createServer( (req, resp) => {
    if (req.method == 'POST') {
      req.pipe(map( (chunk) => {return chunk.toString().toUpperCase();})).pipe(resp);
    } else {
      return res.end('send me a POST\n');
    }
  });
  server.listen(process.argv[2]);
}
