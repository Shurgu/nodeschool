function ProcessData(data) {
    console.log(data);
}

function ProcessStream(stream) {
    stream.on('data', ProcessData);
    stream.on('error', console.error);
    stream.setEncoding('utf8');
}

if (process.argv.length > 2) {
    var http = require('http');
    http.get(process.argv[2], ProcessStream);
}