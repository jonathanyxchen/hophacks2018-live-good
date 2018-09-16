const Counter = require('../../models/Counter');
const Property = require('../../models/Property');
const Crimes = require('../../models/Crimes');

module.exports = (app) => {
  app.get('/api/counters', (req, res, next) => {
    // Counter.find()
    Property.find()
      .exec()
      .then((counter) => res.json(counter))
      .catch((err) => next(err));
  });

  app.post('/api/counters', function (req, res, next) {
    //const counter = new Counter();
    //const property = new Property(req.body.data);

    // const property = new Property({
    //   name: 'Cresmont Loft Apartments',
    //      address: '2807 Cresmont Ave',
    //      price: 820,
    //      distance: 12,
    //      longitude: -76.620830,
    //      latitude: 39.321
    const crimes = new Crimes({
         longitude: -76.620830,
         latitude: 39.321
   });       

    property.save()
      .then(() => res.json(counter))
      .catch((err) => next(err));
  });

  app.delete('/api/counters/:id', function (req, res, next) {
    Counter.findOneAndRemove({ _id: req.params.id })
      .exec()
      .then((counter) => res.json())
      .catch((err) => next(err));
  });

  app.put('/api/counters/:id/increment', (req, res, next) => {
    Counter.findById(req.params.id)
      .exec()
      .then((counter) => {
        counter.count++;

        counter.save()
          .then(() => res.json(counter))
          .catch((err) => next(err));
      })
      .catch((err) => next(err));
  });

  app.put('/api/counters/:id/decrement', (req, res, next) => {
    Counter.findById(req.params.id)
      .exec()
      .then((counter) => {
        counter.count--;

        counter.save()
          .then(() => res.json(counter))
          .catch((err) => next(err));
      })
      .catch((err) => next(err));
  });
};
