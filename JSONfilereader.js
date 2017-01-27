// insert required libraries
var fs = require("fs")

// // parse and print jsonfile
// var parseAndprint = function(err, jsonfile) {
// 	if (err) {
// 		throw err
// 	};
// 	var parsed = JSON.parse(jsonfile)
// 	for (var i=0; i < parsed.length; i++) {
// 		if(process.argv[2] === parsed[i].name) {
// 			console.log("Country: " + parsed[i].name)
// 			console.log("Top Level Domain: " + parsed[i].topLevelDomain)
// 		}
// 	}
// }

//read and parse json file
var parsedJSONfile = function(filename, callback) {
	fs.readFile(filename, function(err, jsonfile) {
		if (err) {
			throw err
		};
		var parsedJSON = JSON.parse(jsonfile)
		callback(parsedJSON)
	})
}



// export the json-file-reader
module.exports = parsedJSONfile