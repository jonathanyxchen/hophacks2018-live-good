const mongoose = require('mongoose');

const CrimeSchema = new mongoose.Schema({
    longitude: {
        type: Number,
    },
    latitude: {
        type: Number,
    }
});

module.exports = mongoose.model('Crime', CrimeSchema);