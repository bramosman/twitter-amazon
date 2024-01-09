// twitterAPI.js
import axios from 'axios';

// Update this URL with the correct backend URL
const BASE_URL = 'https://react-twitter-gray.vercel.app/tweets';

export const getTweets = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}?query=${query}`);
    console.log('Twitter API Response Status:', response.status);
    console.log('Twitter API Response Data:', response.data);

    // Check if the response is an array
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      // If not an array, return an empty array or handle it according to your needs
      console.error('Invalid response format:', response.data);
      return [];
    }
  } catch (error) {
    console.error('Error fetching tweets:', error.message);
    throw new Error(`Failed to fetch tweets. Server response: ${error.message}`);
  }
};
