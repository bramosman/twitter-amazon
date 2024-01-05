// server/server.mjs
import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const PORT = 5000;

// Load environment variables
import dotenv from 'dotenv';
dotenv.config();

const { apiKey, apiSecretKey } = process.env;

// Set CORS headers before defining routes
app.use(cors());
app.use(express.json());

// Redirect requests to the root path to /tweets
app.get('/', (req, res) => {
  res.redirect('/tweets');
});

app.get('/tweets', async (req, res) => {
  const { query } = req.query;

  try {
    // Construct the bearer token
    const bearerToken = Buffer.from(`${apiKey}:${apiSecretKey}`).toString('base64');

    const twitterResponse = await axios.get(`https://api.twitter.com/2/tweets/search/recent?query=${encodeURIComponent(query)}`, {
      headers: {
        'Authorization': `Bearer ${bearerToken}`,
        'Content-Type': 'application/json',
      },
    });

    res.json(twitterResponse.data);
  } catch (error) {
    console.error('Error fetching tweets from Twitter API:', error?.response?.data || error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
