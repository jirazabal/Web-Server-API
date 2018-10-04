var mongoose = require('mongoose');

var SLOSchema = new mongoose.Schema({
    skill_SLO: String,
    unit: String,
    topic: String,
    cognitive_level: String,    
    updated_at: {type: Date, default: Date.now},
});

module.exports = mongoose.model('SLO', SLOSchema);