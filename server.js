"use strict";

let express = require("express");
let os = require("os");

let app = express();

app.use("/", express.static("web"));

app.listen(80, function(){
	console.log("Listening on port 80 on the following interfaces:");

	let inters = os.networkInterfaces();

	for (let inter in inters){
		if (!inters.hasOwnProperty(inter)) continue;

		console.log(inter + ":");

		for (let addressBlock of inters[inter]){
			console.log("\t" + addressBlock.address)
		}
	}
});
