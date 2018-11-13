var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* Save Zipped File */
/* todo -- look at first line */
router.post('/', function(req, res, next){
    Question.create(req.body, function (err, post){
        if (err) return next(err);
        res.json(post);
    });
});