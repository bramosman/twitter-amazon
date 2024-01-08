// twitterAPI.js
import axios from 'axios';

// Update this URL with the correct backend URL
const BASE_URL = 'https://your-backend.vercel.app/tweets';

export const getTweets = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}?query=${query}`);
    console.log('Twitter API Response Status:', response.status);
    console.log('Twitter API Response Data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching tweets:', error.message);
    throw new Error(`Failed to fetch tweets. Server response: ${error.message}`);
  }
};
