var result = 0;

if (process.argv.length > 2) {
    var fs = require('fs');
    var buffer = fs.readFileSync(process.argv[2]);
    var lines = buffer.toString().split('\n');
    result = lines.length - 1;
}

console.log(result);