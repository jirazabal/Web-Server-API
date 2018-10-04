var mongoose = require('mongoose');
var course = require('Course.js');
var slo = require('SLO.js');

var QuestionsSchema = new mongoose.Schema({
    course_id: course,
    question_type: String,
    question_text: String,
    answer_choices: Array,
    none_above: Boolean,
    all_above: Boolean,
    difficulty: String,
    skill_SLO: slo,
    
    updated_at: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Questions', QuestionsSchema);