/**Converts xmls found into a single json*/
function xmltojson() {
    var fs = require('fs');
    var xml2js = require('xml2js');
    //Original JSON read in by the file system
    var json = null;
    //JSON build from parsing info from the original
    var json2 = {};

    //XML files to search for in the decompressed .mbz
    var relevantXMLs = ["module.xml", "vpl.xml"];
    /*SCHEMA*/
    // "answer_choices": [],
    // "course_id": [
    //     {
    //         "course": int
    //     }
    // ],
    // "question_type": string,
    // "question_text": string,
    // "none_above": boolean,
    // "all_above": boolean,
    // "difficulty": string,
    // "cognitive_level": string,
    // "skill_SLO": [
    //     {
    //         "skill_SLO": string,
    //         "unit": string,
    //         "topic": string
    //     }
    //

    relevantXMLs.forEach(function(filePath) {
        try {
            //TODO: Use a function to find the file in decompressed folder instead of using
                //the example files in current directory
            var fileData = fs.readFileSync(filePath, 'utf8');

            var parser = new xml2js.Parser();
            parser.parseString(fileData.substring(0, fileData.length), function (err, result) {
                json = JSON.stringify(result);
            });

            console.log("File '" + filePath + "/ was successfully read.\n");
        } catch (ex) {
            console.log("Unable to find file '" + filePath + "'.");
            //As the set up is now, it won't be able to find module, because it's not
                //in the current directory.
        }
        //Here's how you traverse through the read json.
        if (json) {
            var objectValue = JSON.parse(json);
            //Find a way to read file name, not path
            if(filePath == "vpl.xml"){
                //Access each key in key in vpl.
                //vpl[0].name would access the name for instance
                p = objectValue.activity.vpl[0];
                //Prints each key and its value
                /*for(key in p){
                    console.log(key + "->" + p[key]);
                }*/
                
                // access inner data
                if (p.name != null) {
                    json2.question_title = p.name;
                }
                if (p.intro != null) {
                    json2.question_text = p.intro;
                }
                if (p.required_files != null) {
                    json2.required_files = p.required_files;
                }
            }
            else if(filePath == "module.xml"){
                //Grabs tags from module.xml
                p = objectValue.module.tags[0].tag;
                for(i = 0; i < p.length; i++){
                    var str = p[i].name[0].toLowerCase(); //Tag name
                    str = str.replace(/\s/g, '');
                    //Looking for difficulty tag
                    var diff = "difficulty-"; //Looking for string
                    //If difficulty is found, add it to the JSON
                    if(str.substring(0, diff.length)===diff)
                        json2.difficulty = str.substring(diff.length);

                    //Looking for cognitive level
                        if(str==="remembering"
                            || str === "understanding"
                            || str === "applying"
                            || str === "analyzing"
                            || str === "evaluating"
                            || str === "creating")
                            json2.cognitive_level = str;
                }
            }
        }
    });

    return json2;
};

module.exports.xmltojson = xmltojson; // export your functuion