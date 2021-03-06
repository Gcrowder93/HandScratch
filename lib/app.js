const express = require('express');

const app = express();

// Built in middleware
app.use(express.json());

// App routes

app.use('/api/v1/discs', require('./controllers/discs'));

app.use('/api/v1/drinks', require('./controllers/drinks'));

app.use('/api/v1/games', require('./controllers/games'));

app.use('/api/v1/pets', require('./controllers/pets'));

app.use('/api/v1/pokemon', require('./controllers/pokemon'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
