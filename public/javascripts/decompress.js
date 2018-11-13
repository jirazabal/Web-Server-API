function decompress(source) {
    var targz = require('targz');
    targz.decompress({
        src: source,
        dest: './moodle.mbz.uncompressed', //Change to store as temp
    }, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Done!");
        }
    });
}
module.exports.decompress = decompress;

decompress('./moodle.mbz');