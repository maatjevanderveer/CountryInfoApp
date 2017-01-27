// insert required libraries
var fs = require("fs")

//read and parse json files, and store 
var parsedJSONfile = fs.readFile(__dirname + "/ANYJSONFILE", function(err, jsonfile) {
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
})

// export the json-file-reader
module.exports = parsedJSONfile