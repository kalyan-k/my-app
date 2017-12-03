var liveServer = require("live-server");
var fs = require("fs");
var path = require("path");

var parms = {
  port: 8080,
  host: 'localhost',
  root: './dist',
  open: false,
  file: 'index.html',
  logLevel: 2,
  middleware: [function (req, res, next) {
    console.log(req.url);
    var dummyJson = {
      "name": "test"
    };

    if (req.url.indexOf('') > -1) {
      res.end(JSON.stringify(dummyJson));
    } else if (req.url.indexOf('') > -1) {
      var logo = fs.readFileSync(path.resolve('./src/'));
      res.end(logo);
    } else if (req.url.indexOf('') > -1) {
      var jsonData = fs.readFileSync(path.resolve('./mockApiData/dummyData.json'));

      res.end(jsonData);
    } else {
      next();
    }
  }]
};

liveServer.start(parms);
