const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = 5000;

// Load environment variables
require('dotenv').config();

const { API_KEY, API_SECRET_KEY } = process.env;

// Set CORS headers before defining routes
app.use(cors());
app.use(express.json());

app.get('/tweets', async (req, res) => {
  const { query } = req.query;

  try {
    // Construct the bearer token
    const bearerToken = Buffer.from(`${API_KEY}:${API_SECRET_KEY}`).toString('base64');

    // Use the axios request with params directly
    const twitterResponse = await axios.get('https://api.twitter.com/2/tweets/search/recent', {
      headers: {
        'Authorization': `Bearer ${bearerToken}`,
        'Content-Type': 'application/json',
      },
      params: {
        query: query,
      },
    });

    res.json(twitterResponse.data);
  } catch (error) {
    console.error('Error fetching tweets from Twitter API:', error);

    // Log more details about the error response from Twitter API
    if (error.response) {
      console.error('Twitter API Error Response:', error.response.data);
    }

    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
