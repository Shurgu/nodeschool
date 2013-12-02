var PrintOutFiles = function(err, list) {
    if (!err) {
        var extPatern = new RegExp('\\.' + process.argv[3] + '+$', 'i');
        list.forEach(function(fileName) {
            if (extPatern.test(fileName)) {
                console.log(fileName);
            }
        })
    } else {
        console.log('Some error: ' + err);
    }
}

if (process.argv.length > 3) {
    var fs = require('fs');
    fs.readdir(process.argv[2], PrintOutFiles);
}