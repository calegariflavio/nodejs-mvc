const express = require('express');
const app = express();
const quoteRoutes = require('./routes/quotesRoutes');

// Middleware
app.use(express.json()); // For parsing JSON request bodies

// Routes
app.use('/quote', quoteRoutes);

// Start the server
const port = 7000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
