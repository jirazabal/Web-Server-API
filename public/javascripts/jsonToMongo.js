var http = require("http");
var sequence = 0;
var maxSequence = 999999;

function JsonToMongo() {
    var fs = require('fs');
    var filePath;
    var rimraf = require('rimraf');
    
    const decompress = require('./decompress.js');
    //const searchDirectory = require('./searchDirectory.js');
    const functions = require('./xmlToJson.js');
    
    console.log(sequence + " sequence");
    filePath = decompress.decompress("moodle.mbz", sequence);
    sequence+=1;
    if(sequence > maxSequence)
        sequence = 0;
    setTimeout(function(){
        //let directory = searchDirectory.searchDirectory();
        let json = functions.xmltojson();
        console.log(json);
        console.log(filePath);
        rimraf(filePath, function () { console.log('done'); });
    }, 3000); //An estimated time, for now
    



}
JsonToMongo();