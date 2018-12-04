var fs = require('fs');

var xml2js = require('xml2js');

var json = null;

var filePath = "vpl.xml"   // Assume this returns a fully qualified XML file path
try {
    var fileData = fs.readFileSync(filePath, 'utf8');

    var parser = new xml2js.Parser();       
    parser.parseString(fileData.substring(0, fileData.length), function (err, result) {
        json = JSON.stringify(result);
    });

    console.log("File '" + filePath + "/ was successfully read.\n");
} catch (ex) {
    console.log("Unable to read file '" + filePath + "'.");
    console.log(ex);
}
//Here's how you traverse through the read json.
if(json){
    var objectValue = JSON.parse(json);
    //Access each key in key in vpl.
    p = objectValue.activity.vpl[0];
        //vpl[0].name would access the name for instance
    for(var key in p)
        if (p.hasOwnProperty(key)) {
            console.log(key);
        }
}