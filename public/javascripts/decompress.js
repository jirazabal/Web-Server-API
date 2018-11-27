function decompress(source, sequence) {
    var targz = require('targz');
    var destination = 'moodle.mbz.uncompressed' + sequence;
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
/*//Copied from https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }*/