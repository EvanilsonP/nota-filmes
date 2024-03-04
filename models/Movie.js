const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({

    movie: {
        type: String,
        required: true,
        trim: true
    },

    rating: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    }
});

module.exports = new mongoose.model('Movie', movieSchema);