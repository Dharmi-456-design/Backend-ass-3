const express = require('express');
const cors = require('cors');

const { errorHandler } = require('./middlewares/errorHandler.middleware');
const { logger } = require('./middlewares/logger.middleware');
const noteRoutes = require('./routes/note.routes');

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);

// Routes
app.use('/api/notes', noteRoutes);

// Root route
app.get('/', (req, res) => {
    res.status(200).json({ success: true, message: 'Welcome to the Notes API' });
});

// Error Handler
app.use(errorHandler);

module.exports = app;