const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    address: {
        type: String,
    },
    price: {
        type: Number,
    },
    distance: {
        type: Number,
    },
    // crime: { //TODO:
    //     type: 'Number',
    //     required: true
    // },
    longitude: {
        type: Number,
    },
    latitude: {
        type: Number,
    }
})

module.exports = mongoose.model('Property', PropertySchema);