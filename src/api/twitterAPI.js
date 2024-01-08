// twitterAPI.js
import axios from 'axios';

const BASE_URL = 'https://react-twitter-gray.vercel.app/tweets'; // Update to the correct URL

export const getTweets = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}?query=${query}`);
    console.log('Twitter API Response:', response.data.tweets); // Assuming the tweets are nested under 'tweets' property
    return response.data.tweets; // Adjust accordingly based on the actual structure of the response
  } catch (error) {
    console.error('Error fetching tweets:', error.message);
    throw new Error(`Failed to fetch tweets. Server response: ${error.message}`);
  }
};
