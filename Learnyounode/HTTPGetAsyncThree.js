var results = [];
var count = 0;
var bl = require('bl');
var http = require('http')

function OutputResult() {
  for (var i = 0; i < 3; i++) {
    console.log(results[i]);
  }
}

function httpGet (i) {
  http.get(process.argv[i+2], (res) => {
    res.pipe(bl((err, data)=> {
      if (err) {
        return console.error(data);
      }
      results[i] = data.toString();
      count++;
      if (count===3) {
        OutputResult();
      }
    }));
  });
}

for (var i = 0; i < 3; i++) {
  httpGet(i);
}
