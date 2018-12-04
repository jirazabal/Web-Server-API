var http = require("http");
var fs = require('fs');
var filePath;
var rimraf = require('rimraf');

const functions = require('./xmlToJson.js');
const searchDirectory = require('./searchDirectory.js');
const decompress = require('./decompress.js');

function JsonToMongo() {
    
    filePath = decompress.decompress("moodle.mbz");
    setTimeout(function(){
        let directory = searchDirectory.searchDirectory();
        let json = functions.xmltojson(directory);
        console.log(json);
        console.log(filePath);
        rimraf(filePath, function () { console.log('done'); });
        //fs.unlinkSync(filePath) 
    }, 3000); //An estimated time, for now
    



}
JsonToMongo();