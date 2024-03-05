const Movie = require('../models/Movie');

// Homepage
const homePage = async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.render('index', { title: 'Homepage', movies });
    } 
    catch (error) {
        console.log(error);
    }
};

// Creating movie
const addMovie = async (req, res) => {
    try {
        const { movie, rating, date } = req.body;
        const newMovie = await Movie.create({ movie, rating, date });
        console.log(newMovie);
        res.redirect('/');
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

// Update movie
const updatedMovie = async (req, res) => {
    try {
        const movieId = req.params.id;
        const updatedMovie = await Movie.findByIdAndUpdate(movieId, {
            movie: req.body.movie,
            rating: req.body.rating,
            date: req.body.date
        });

        res.status(200).send(updatedMovie);
    } 

    catch (error) {
        console.log(error);
    }
};

// Delete a movie
const deleteMovie = async (req, res) => {
    try {
        const movieId = req.params.id;
        await Movie.findByIdAndDelete(movieId);
        res.status(200).json({ message: 'Movie deleted. '}); 
    } 
    catch (error) {
        console.log(error);
    }
};

module.exports = { homePage, addMovie, movieById, updatedMovie, deleteMovie };