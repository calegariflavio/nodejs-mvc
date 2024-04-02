const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quotesController');

router.get('/random', quoteController.getRandomQuote);
router.get('/:id', quoteController.getQuoteById); 
router.get('/', quoteController.getAllQuotes); 

module.exports = router;
