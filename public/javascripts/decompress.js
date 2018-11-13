function decompress(source) {
    var targz = require('targz');
    var destination = 'moodle.mbz.uncompressed';
    targz.decompress({
        src: source,
        dest: destination, //Change to store as temp
    }, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Done!");
        }
    });
 //   if(dest != null)
        return destination;
}
module.exports.decompress = decompress;

//decompress('./moodle.mbz');