var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = require('../models/Product.js');

/* Get All Products */
router.get('/', function(req, res, next){
    Product.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* Get Single Product By Id */
router.get('/:id', function(req, res, next){
    Product.findById(req.params.id, function (err, post){
        if (err) return next(err);
        res.json(post);
    });
});

/* Save Product */
router.post('/', function(req, res, next){
    Product.create(req.body, function (err, post){
        if (err) return next(err);
        res.json(post);
    });
});

/* Update Product */
router.put('/:id', function(req, res, next){
    Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, post){
        if (err) return next(err);
        res.json(post);
    });
});

/* Delete Product */
router.delete('/:id', function(req, res, next){
    Product.findByIdAndRemove(req.params.id, req.body, function(err, post){
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;