const express = require('express');
const morgan = require('morgan');

const app = express();

// Global MiddleWares
app.use(morgan());
app.use(express.json());

// Define Routes

// Define 404 Response

module.exports = app;
