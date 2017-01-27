// STAPPENPLAN
// console.log("stappenplan")

// insert required libraries 
var fs = require("fs")

// read the countries.json file
fs.readFile(__dirname + "/countries.json", function(err, countries) {
	if (err) {
		throw err
	};
	// console.log("Please let this work")
	var parsedCountries = JSON.parse(countries)
	// console.log(parsedCountries)
	// console.log(parsedCountries[0].name)			// parse the countries.json file
	for (var i=0; i < parsedCountries.length; i++) { 			// walk through the list (array) of objects (for loop) 
		if (process.argv[2] === parsedCountries[i].name) { 					// and if object.name === inputName, then // output info about that specific country
			console.log("Country: " + parsedCountries[i].name) 					// print value of key-value pair --> Country: <country name>
			console.log("Top Level Domain: " + parsedCountries[i].topLevelDomain) 	// print --> Top Level Domain: <tld> 
		}
	}
})
// console.log(process.argv[])


// takes in one parameter from the command line: node app.js blablabla