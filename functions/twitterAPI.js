// functions/twitterAPI.js
const axios = require('axios');
const functions = require('firebase-functions');

exports.getTweets = functions.https.onRequest(async (req, res) => {
  try {
    const response = await axios.get('https://api.twitter.com/2/tweets/search/recent', {
      params: { query: req.query.query },
      headers: {
        'Accept': 'application/json',
      },
    });

    console.log('Twitter API Request URL:', 'https://api.twitter.com/2/tweets/search/recent');
    console.log('Twitter API Request Parameters:', { query: req.query.query });
    console.log('Twitter API Response Content-Type:', response.headers['content-type']);
    console.log('Twitter API Response Data:', response.data);

    if (Array.isArray(response.data)) {
      res.header('Content-Type', 'application/json');
      res.status(200).json(response.data);
    } else {
      console.error('Invalid tweet data received.');
      res.header('Content-Type', 'application/json');
      res.status(500).json({ error: 'Invalid tweet data received.' });
    }
  } catch (error) {
    console.error('Error fetching tweets from Twitter API:', error);
    res.header('Content-Type', 'application/json');
    res.status(500).json({ error: 'Failed to fetch tweets from Twitter API.' });
  }
});
