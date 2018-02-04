const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

// load environment variables
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

const applicant = require('./routes/applicant');

// set up express app
const app = express();

// log requests to console
app.use(logger('dev'));

// parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', applicant);    // give entry point for backend

app.use("*", function(req, res) {
    res.status(404).send('404');
});

module.exports = app;