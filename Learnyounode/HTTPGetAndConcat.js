function ProcessData(data) {
    allData += data;
    allChars += data.length;
}

function OutputResult(data) {
    console.log(allChars);
    console.log(allData);
}

function ProcessStream(stream) {
    stream.on('data', ProcessData);
    stream.on('error', console.error);
    stream.on('end', OutputResult);
    stream.setEncoding('utf8');
}

if (process.argv.length > 2) {
    var allData = '';
    var allChars = 0;
    var http = require('http');
    http.get(process.argv[2], ProcessStream);
}