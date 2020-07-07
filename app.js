const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    )
);