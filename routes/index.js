const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.get('/', movieController.homePage);
router.post('/addMovie', movieController.addMovie);
router.get('/:id', movieController.movieById);

module.exports = router;