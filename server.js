'use strict';

var http = require('http');
var fs = require('fs');
var os = require('os');

var staticServer = http.createServer(function(req, res){
	console.log('Got ' + req.method + ' request for ' + req.url);

	res.status = 200;

	fs.createReadStream("./web/index.html").pipe(res);
});

staticServer.listen(80, function(){
	console.log("Listening on port 80 on the following interfaces:");

	console.log(os.networkInterfaces());
});