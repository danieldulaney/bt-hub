'use strict';

var http = require('http');
var fs = require('fs');

var readFile = fs.createReadStream("./web/index.html");

var staticServer = http.createServer(function(req, res){
	console.log('Got ' + req.method + ' request for ' + req.url);

	res.status = 200;

	readFile.pipe(res);
	readFile.pipe(process.stdout)
	
});

staticServer.listen(80);