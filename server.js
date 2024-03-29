var express = require('express');
var app = express();
app.use(express.static('assets'));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.get('', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
 });
 var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("server listening at http://%s:%s", host, port);
 });