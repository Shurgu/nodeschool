var CountLines = function(err, data) {
	var result;
	if (!err) {
		var lines = data.toString().split('\n');
		result = lines.length - 1;
	} else {
		result = 'Some error: ' + err;
	}

	console.log(result);
}

if (process.argv.length > 2) {
	var fs = require('fs');
	fs.readFile(process.argv[2], CountLines);
}
