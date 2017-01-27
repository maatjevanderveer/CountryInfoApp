// insert required libraries
var fs = require("fs")

var parseAndprint = function(err, jsonfile) {
	if (err) {
		throw err
	};
	var parsed = JSON.parse(jsonfile)
	for (var i=0; i < parsed.length; i++) {
		if(process.argv[2] === parsed[i].name) {
			console.log("Country: " + parsed[i].name)
			console.log("Top Level Domain: " + parsed[i].topLevelDomain)
		}
	}
}

//read and parse json files, and store 
var parsedJSONfile = function(countryName) {
	fs.readFile(__dirname + "/countries.json", parseAndprint)
}



// export the json-file-reader
module.exports = parsedJSONfile