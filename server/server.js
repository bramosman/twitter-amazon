// server.js
import express from 'express';
import cors from 'cors';
import { getTweets } from './api/twitterAPI.js';

const app = express();

// Enable CORS for all routes
app.use(cors());

// Define your API endpoint
app.get('/tweets', async (req, res) => {
  try {
    const query = req.query.query || '#matterport';
    const tweets = await getTweets(query);
    res.json(tweets);
  } catch (error) {
    console.error('Error fetching tweets:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
