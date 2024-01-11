import express from 'express';
import cors from 'cors';
import { getTweets } from './api/twitterAPI.js';

const app = express();

// Use the 'cors' middleware to handle CORS headers
app.use(cors());

app.get('/tweets', async (req, res) => {
  try {
    const query = req.query.query || '#matterport';
    const tweetData = await getTweets(query);

    // Set the Content-Type header to indicate JSON content
    res.header('Content-Type', 'application/json');

    // Return the JSON-formatted data
    res.status(200).json(tweetData);
  } catch (error) {
    console.error('Error fetching and processing tweets:', error);

    // Set the Content-Type header to indicate JSON content
    res.header('Content-Type', 'application/json');

    // Return a JSON-formatted error response
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
