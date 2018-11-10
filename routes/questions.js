var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Question = require('../models/Questions.js');

/* Get All Questions */
router.get('/', function(req, res, next){
    Question.find(function (err, Questions) {
        if (err) return next(err);
        res.json(Questions);
    });
});

/* Get Single Question By Id */
router.get('/:id', function(req, res, next){
    Question.findById(req.params.id, function (err, post){
        if (err) return next(err);
        res.json(post);
    });
});

/* Save Question */
router.post('/', function(req, res, next){
    Question.create(req.body, function (err, post){
        if (err) return next(err);
        res.json(post);
    });
});

/* Update Question */
router.put('/:id', function(req, res, next){
    Question.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, post){
        if (err) return next(err);
        res.json(post);
    });
});


/* Delete Question */
router.delete('/:id', function(req, res, next){
    Question.findByIdAndRemove(req.params.id, req.body, function(err, post){
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;