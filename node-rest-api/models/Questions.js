var mongoose = require('mongoose');

var SLOSchema = new mongoose.Schema({
    skill_SLO: String,
    unit: String,
    topic: String,    
    updated_at: {type: Date, default: Date.now},
});

var CourseSchema = new mongoose.Schema({
    course: Number,   
    updated_at: {type: Date, default: Date.now},
});

var QuestionsSchema = new mongoose.Schema({
    course_id: [CourseSchema],
    question_type: String,
    question_text: String,
    answer_choices: Array,
    none_above: Boolean,
    all_above: Boolean,
    difficulty: String,
    cognitive_level: String,
    skill_SLO: [SLOSchema],
    
    updated_at: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Questions', QuestionsSchema);