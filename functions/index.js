// functions/index.js
const functions = require('firebase-functions');
const { createServer } = require('http');
const app = require('./api'); // Assuming your Cloud Functions are in a separate 'api' file

const server = createServer(app);

exports.api = functions.https.onRequest(server);
