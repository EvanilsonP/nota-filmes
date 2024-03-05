const Movie = require('../models/Movie');

// Homepage
const homePage = async (req, res) => {
    res.render('index');
};

// Creating movie
const addMovie = async (req, res) => {
    try {
        const { movie, rating, date } = req.body;
        const newMovie = await Movie.create({ movie, rating, date });
        console.log(newMovie);
        res.render('index');
    } 

    catch (error) {
        console.log(error);
    }
};

// Grabbing movie id
const movieById = async (req, res) => {
    try {
        const movieId = req.params.id;
        const movieById = await Movie.findById(movieId);
        return res.status(200).json(movieById);
    } 

    catch (error) {
        console.log(error);
    }
};

module.exports = { homePage, addMovie, movieById };