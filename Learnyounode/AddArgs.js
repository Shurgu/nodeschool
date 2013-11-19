var result = 0;

if (process.argv.length > 2) {
    for (var i = 2; i < process.argv.length; i++) {
        result = result + +process.argv[i];
    };
}

console.log(result);