const Property = require('../../models/Property');

module.exports = (app) => {
    app.get('/api/properties', (req, res, next) => {
      Property.find()
        .exec()
        .then((property) => res.json(property))
        .catch((err) => next(err));
    });
  
    app.post('/api/properties', function (req, res, next) {
    //   const property = new Property(req.body.data);
  
    //   property.save()
    //     .then(() => res.json(property))
    //     .catch((err) => next(err));

    console.log("test");
    console.log(req.body);
    Property.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
      });
    });
  
    app.delete('/api/properties/:id', function (req, res, next) {
      Property.findOneAndRemove({ _id: req.params.id })
        .exec()
        .then((property) => res.json())
        .catch((err) => next(err));
    });
  
    app.put('/api/properties/:id/increment', (req, res, next) => {
      Property.findById(req.params.id)
        .exec()
        .then((property) => {
          property.count++;
  
          property.save()
            .then(() => res.json(property))
            .catch((err) => next(err));
        })
        .catch((err) => next(err));
    });
  
    app.put('/api/properties/:id/decrement', (req, res, next) => {
      Property.findById(req.params.id)
        .exec()
        .then((property) => {
          property.count--;
  
          property.save()
            .then(() => res.json(property))
            .catch((err) => next(err));
        })
        .catch((err) => next(err));
    });
  };

// var express = require('express');
// var router = express.Router();
// var mongoose = require('mongoose');
// var Property = require('../../models/Property');

// /* GET ALL BOOKS */
// router.get('/', function(req, res, next) {
//   Property.find(function (err, products) {
//     if (err) return next(err);
//     res.json(products);
//   });
// });

// /* GET SINGLE BOOK BY ID */
// router.get('/:id', function(req, res, next) {
//   Property.findById(req.params.id, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

// /* SAVE BOOK */
// router.post('/', function(req, res, next) {
//   Property.create(req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

// /* UPDATE BOOK */
// router.put('/:id', function(req, res, next) {
//   Property.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

// /* DELETE BOOK */
// router.delete('/:id', function(req, res, next) {
//   Property.findByIdAndRemove(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

// module.exports = router;