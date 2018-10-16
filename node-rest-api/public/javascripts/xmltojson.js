fs = require('fs');
var xml2js = require('xml2json');

var filePath = "node-rest-api/public/javascripts/vpl.xml"   // Assume this returns a fully qualified XML file path
try {
    var fileData = fs.readFileSync(filePath, 'utf8');

    var parser = new xml2js.Parser();       
    parser.parseString(fileData.substring(0, fileData.length), function (err, result) {
        var json = JSON.stringify(result);
    });

    console.log("File '" + filePath + "/ was successfully read.\n");
} catch (ex) {
    console.log("Unable to read file '" + filePath + "'.");
    console.log(ex);
}