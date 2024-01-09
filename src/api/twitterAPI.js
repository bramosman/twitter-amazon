// twitterAPI.js
import axios from 'axios';

// Update this URL with the correct backend URL
const BASE_URL = 'https://react-twitter-gray.vercel.app/tweets';

export const getTweets = async (query) => {
  try {
    const response = await axios.get(BASE_URL, { params: { query } });
    console.log('Twitter API Full Response:', response);
    console.log('Twitter API Response Status:', response.status);
    console.log('Twitter API Response Data:', response.data);

    if (!Array.isArray(response.data)) {
      console.error('Invalid response format');
      throw new Error('Invalid response format');
    }

    return response.data;
  } catch (error) {
    console.error('Error fetching tweets:', error.message);
    throw new Error(`Failed to fetch tweets. Server response: ${error.message}`);
  }
};
