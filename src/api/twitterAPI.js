// twitterAPI.js
import axios from 'axios';

const BASE_URL = 'https://react-twitter-gray.vercel.app/tweets';

export const getTweets = async () => {
  try {
    const response = await axios.get(BASE_URL);
    console.log('Twitter API Response Status:', response.status);
    console.log('Twitter API Response Data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching tweets:', error.message);
    throw new Error(`Failed to fetch tweets. Server response: ${error.message}`);
  }
};
