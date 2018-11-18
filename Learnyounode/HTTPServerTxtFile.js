var http = require('http');
var fs = require('fs');

if (process.argv.length > 3) {
  var server = http.createServer( (req, resp) => {
    fs.createReadStream(process.argv[3]).pipe(resp);
  });
  server.listen(process.argv[2]);
}
