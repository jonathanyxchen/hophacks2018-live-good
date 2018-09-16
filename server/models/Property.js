const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    name: {
        type: 'String',
        required: true
    },
    address: {
        type: 'String',
        required: true
    },
    price: {
        type: 'Number',
        required: true
    },
    distance: {
        type: 'Number',
        required: true
    },
    crime: { //TODO:
        type: 'Number',
        required: true
    },
    longitude: {
        type: 'Number',
        default: 39.2904,
        required: false
    },
    latitude: {
        type: 'Number',
        default: -76.6122,
        required: false
    }
})

module.exports = mongoose.model('Property', PropertySchema);