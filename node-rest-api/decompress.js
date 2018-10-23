var targz = require('targz');
 

targz.decompress({
    src: './moodle.mbz',
    dest: './moodle.mbz.uncompressed',
}, function(err){
    if(err) {
        console.log(err);
    } else {
        console.log("Done!");
    }
});
