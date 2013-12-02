if (process.argv.length > 3) {
    var Output = function(err, data) {
        if (err) {
            console.log(err);
        } else {
            data.forEach(function(item) {
                console.log(item);
            });
        }
    }
    var filter = require('./FilterFilesInDirModule');
    filter(process.argv[2], process.argv[3], Output);
}