module.exports = function(dir, ext, callback) {
    var FilterFiles = function(err, list) {
        if (!err) {
            // var extPatern = new RegExp('\\.' + ext + '+$', 'i');
            // var files = list.filter(function(fileName) {
            //     return extPatern.test(fileName);
            // });
            var path = require('path');
            var files = list.filter(function(fileName) {
                return path.extname(fileName) === '.' + ext;
            });
            callback(null, files);
        } else {
            return callback(err);
        }
    }

    var fs = require('fs');
    fs.readdir(dir, FilterFiles);
}
