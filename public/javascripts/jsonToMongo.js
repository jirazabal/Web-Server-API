var http = require("http");
//Used for giving decompressed directories
//original names to prevent collisions
var sequence = 0;
var maxSequence = 9999999;

/** Extracts a JSON from the info in given mbz directory
 *  TODO: Read-in directory
 *  TODO: Add extracted JSON to database
 */
function JsonToMongo() {
    var fs = require('fs'); //File system
    var filePath;
    var rimraf = require('rimraf'); //For removing directories
    
    const decompress = require('./decompress.js');
    const functions = require('./xmlToJson.js');
    
    //Decompress the given mbz file into a temp directory
    //TODO: read in file path instead of hard-coding 'moodle.mbz'
    filePath = decompress.decompress("moodle.mbz", sequence);
        sequence+=1;
    //Reset the sequence when we hit the max index
    if(sequence > maxSequence)
        sequence = 0;
    //Timeout waits, file should be decompressed by the time it goes off
    setTimeout(function(){
        let json = functions.xmltojson(); //Build json from xmls in extracted directory
        console.log(json);
        console.log(filePath);
        rimraf(filePath, function () { console.log('done'); }); //Delete the temp directory
    }, 3000); //An estimated time, for now
}
JsonToMongo();