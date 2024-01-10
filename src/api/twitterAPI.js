import axios from 'axios';
import { parse } from 'node-html-parser';

const BASE_URL = 'https://react-twitter-gray.vercel.app';

export const getTweets = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/tweets`, {
      params: { query },
    });

    console.log('Twitter API Full Response:', response);
    console.log('Twitter API Response Status:', response.status);
    console.log('Twitter API Response Data:', response.data);

    const tweetData = extractTweetData(response.data);

    return tweetData;
  } catch (error) {
    console.error('Error fetching tweets:', error.message);
    throw new Error(`Failed to fetch tweets. Server response: ${error.message}`);
  }
};

const extractTweetData = (htmlContent) => {
  const root = parse(htmlContent);

  // Assuming tweets are within a specific HTML structure
  const tweetElements = root.querySelectorAll('.tweet'); // Adjust this selector based on your HTML structure

  // Extract relevant tweet data
  const tweetData = tweetElements.map((tweetElement) => {
    const tweetTextElement = tweetElement.querySelector('.tweet-text'); // Adjust this selector
    const tweetAuthorElement = tweetElement.querySelector('.tweet-author'); // Adjust this selector

    const tweetText = tweetTextElement ? tweetTextElement.innerText : '';
    const tweetAuthor = tweetAuthorElement ? tweetAuthorElement.innerText : '';

    return {
      text: tweetText,
      author: tweetAuthor,
    };
  });

  return tweetData;
};
