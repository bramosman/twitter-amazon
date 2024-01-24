//function / api.js
const express = require('express');
const cors = require('cors');
const { getTweets } = require('./twitterAPI'); // Adjust the path based on your project structure

const app = express();
app.use(cors());

// Define your Cloud Functions routes
app.use('/getTweets', getTweets);

module.exports = app;
