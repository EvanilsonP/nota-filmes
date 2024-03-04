const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    rating: {
        type: String,
        required: true
    },

    date: {
        type: Number,
        required: true
    }
});

module.exports = new mongoose.model('Movie', movieSchema);