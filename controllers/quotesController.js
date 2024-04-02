const quotes = require('../models/quotes');

const getRandomQuote = (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  res.json(randomQuote);
};

const getQuoteById = (req, res) => {
  const quoteId = parseInt(req.params.id, 10) - 1; // Adjust for zero-based indexing
  if (quoteId >= 0 && quoteId < quotes.length) {
    res.json(quotes[quoteId]);
  } else {
    res.status(404).send('Quote not found');
  }
};

const getAllQuotes = (req, res) => {
  res.json(quotes); // Send the entire quotes array
};

module.exports = {
  getRandomQuote,
  getQuoteById,
  getAllQuotes
};
