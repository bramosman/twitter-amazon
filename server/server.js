// server.js
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import { parse } from 'node-html-parser';
import { getTweets } from './api/twitterAPI.js';

const app = express();

app.use(cors());

app.get('/tweets', async (req, res) => {
  try {
    const query = req.query.query || '#matterport';
    const htmlContent = await getTweets(query);

    const tweetData = extractTweetData(htmlContent);

    // Set CORS headers
    res.header('Access-Control-Allow-Origin', 'https://react-twitter-gray.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    res.status(200).json(tweetData);
  } catch (error) {
    console.error('Error fetching and processing tweets:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const extractTweetData = (htmlContent) => {
  const root = parse(htmlContent);

  // Assuming tweets are within a specific HTML structure
  const tweetElements = root.querySelectorAll('.tweet'); // Adjust this selector based on your HTML structure

  // Extract relevant tweet data
  const tweetData = tweetElements.map((tweetElement) => {
    const tweetText = tweetElement.querySelector('.tweet-text').innerText; // Adjust this selector
    const tweetAuthor = tweetElement.querySelector('.tweet-author').innerText; // Adjust this selector

    return {
      text: tweetText,
      author: tweetAuthor,
    };
  });

  return tweetData;
};

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
