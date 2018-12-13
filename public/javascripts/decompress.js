/** Decompresses given mbz
 * @param source: Filepath of the mbz
 * @param sequence: incrementing id for the folder. Used to prevent collisions
 */
function decompress(source, sequence) {
    var targz = require('targz'); //mbz is really a targz, so call this
    var destination = 'moodle.mbz.decompressed' + sequence;
    targz.decompress({
        src: source,
        dest: destination,
    }, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log(".mbz decompressed into " + destination + "!");
        }
    });
    return destination;
}
module.exports.decompress = decompress;