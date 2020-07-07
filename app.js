const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


