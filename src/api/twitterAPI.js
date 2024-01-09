// twitterAPI.js
import axios from 'axios';

// Update this URL with the correct backend URL
const BASE_URL = 'https://react-twitter-gray.vercel.app/tweets';

export const getTweets = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}?query=${query}`);
    console.log('Twitter API Response Status:', response.status);

    // Check if the response is HTML
    if (response.headers['content-type'].includes('text/html')) {
      console.error('Received HTML response from Twitter API');
      throw new Error('Invalid response format');
    }

    console.log('Twitter API Response Data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching tweets:', error.message);
    throw new Error(`Failed to fetch tweets. Server response: ${error.message}`);
  }
};
