var express = require('express');
var app = express();
var engines = require('consolidate');

app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/src',  express.static(__dirname + '/src'));
app.use('/example',  express.static(__dirname + '/example'));
app.use('/style',  express.static(__dirname + '/style'));

/*
app.set('views', __dirname + '/example');
app.engine('html', engines.mustache);;
app.set('view engine', 'html');
*/

app.get('/', function (req, res) {
  res.send('Hello World!');
  //res.render("example.html");
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
