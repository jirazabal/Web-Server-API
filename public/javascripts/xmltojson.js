function xmltojson(str) {
    var fs = require('fs');

    var xml2js = require('xml2js');

    var json = null;

    var json2 = {};
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


    var filePath = str;   // Assume this returns a fully qualified XML file path
    var thing = "module.xml";
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
    if (json) {
        var objectValue = JSON.parse(json);
        //Find a way to read file name, not path
        if(filePath == "vpl.xml"){
            //Access each key in key in vpl.
            p = objectValue.activity.vpl[0];
            for(key in p){
                console.log(key + "->" + p[key]);
            }
            
            //vpl[0].name would access the name for instance
            // access inner data
            if (p.name != null) {
                json2.question_title = p.name;
            }
            if (p.intro != null) {
                json2.question_text = p.intro;
            }
            if (p.required_files != null) {
                json2.required_files = p.required_files;
                console.log(json2.required_files[0].required_file[0].name);
            }
        }
        if(thing == "module.xml"){
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

    //console.log(json2);
    return json2;
};
module.exports.xmltojson = xmltojson; // export your functuion

// test call 
//xmltojson();