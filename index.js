const express = require('express');
const app = express();

const {config} = require('./config/index');
const moviesApi = require('./routes/movies');

const {logErrors, errorHandler, wrapErrors} = require('./utils/middleware/errorHanders');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

app.use(express.json());

// routes
moviesApi(app);

// Catch 404
app.use(notFoundHandler)

// Errors handlers
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
    console.log(`Listening http://localhost:${config.port}`);
})