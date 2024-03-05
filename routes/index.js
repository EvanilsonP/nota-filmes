const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');


router.get('/', movieController.homePage);
router.get('/movies', movieController.allMovies);
router.get('/search', movieController.search);

router.get('/:id', movieController.movieById);

router.post('/addMovie', movieController.addMovie);



router.put('/:id', movieController.updatedMovie);
router.delete('/:id', movieController.deleteMovie);


module.exports = router;