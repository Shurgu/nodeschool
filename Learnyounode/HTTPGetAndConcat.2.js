function OutputResult(err, data) {
    if (err) {
        return console.error(data);
    }
    data = data.toString();
    console.log(data.length);
    console.log(data);
}

function ProcessStream(stream) {
    var bl = require('bl');
    stream.pipe(bl(OutputResult));
}

if (process.argv.length > 2) {
    var http = require('http');
    http.get(process.argv[2], ProcessStream);
}