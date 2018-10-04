var mongoose = require('mongoose');

var CourseSchema = new mongoose.Schema({
    course: Number,   
    updated_at: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Course', CourseSchema);