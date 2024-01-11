// server.js
import express from 'express';
import cors from 'cors';
import { getTweets } from './api/twitterAPI.js';

const app = express();

app.use(cors());

app.get('/tweets', async (req, res) => {
  try {
    const query = req.query.query || '#matterport';
    const tweetData = await getTweets(query);

    // Set CORS headers
    res.header('Access-Control-Allow-Origin', 'https://react-twitter-gray.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    // Set the Content-Type header to indicate JSON content
    res.header('Content-Type', 'application/json');

    // Return the JSON-formatted data
    res.status(200).json(tweetData);
  } catch (error) {
    console.error('Error fetching and processing tweets:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
