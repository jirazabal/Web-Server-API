var http = require("http");

function JsonToMongo() {
    const functions = require('./xmlToJson.js');

    let json = functions.xmltojson();
    //console.log(json);


}
JsonToMongo();