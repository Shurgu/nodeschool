module.exports = function(dir, ext, callback) {
    var FilterFiles = function(err, list) {
        if (!err) {
            var extPatern = new RegExp('\\.' + ext + '+$', 'i');
            var files = list.filter(function(fileName) {
                return extPatern.test(fileName);
            });
            callback(null, files);
        } else {
            callback(err);
        }
    }

    var fs = require('fs');
    fs.readdir(dir, FilterFiles);
}