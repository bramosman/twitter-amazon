// server.mjs
import express from 'express';
import dotenv from 'dotenv';
import Twitter from 'twitter';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Twitter API configuration
const client = new Twitter({
  consumer_key: process.env.apiKey,
  consumer_secret: process.env.apiSecretKey,
  access_token_key: process.env.accessToken,
  access_token_secret: process.env.accessTokenSecret,
});

// Define a route
app.get('/tweets', (req, res) => {
  // Your Twitter API logic here
  const params = { screen_name: 'BramOsman4' }; // Replace with your Twitter screen name
  client.get('statuses/user_timeline', params, (error, tweets, response) => {
    if (!error) {
      res.json({ tweets });
    } else {
      res.status(500).json({ error: 'Unable to fetch tweets' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
