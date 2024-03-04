const Movie = require('../models/Movie');

const homePage = async (req, res) => {
    res.render('index');
};

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

module.exports = { homePage, addMovie }