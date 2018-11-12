var net = require('net');

function addZero(i) {
  return (i < 10 ? '0' : '')+i;
}

if (process.argv.length > 2) {
  var server = net.createServer( (socket) => {
    var date = new Date();
    var dateStr = date.getFullYear()+'-'+
      addZero(date.getMonth()+1)+'-'+
      addZero(date.getDate())+' '+
      addZero(date.getHours())+':'+
      addZero(date.getMinutes())+'\n';
    socket.end(dateStr);
  });
  server.listen(process.argv[2]);
}
