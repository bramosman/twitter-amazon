// twitterAPI.js
import axios from 'axios';

// Update this URL with the correct backend URL
const BASE_URL = 'https://react-twitter-gray.vercel.app';

export const getTweets = async (query) => {
  try {
    // Make a GET request to the /tweets endpoint with the specified query
    const response = await axios.get(`${BASE_URL}/tweets`, {
      params: { query },
    });

    // Log the full Twitter API response, status, and data
    console.log('Twitter API Full Response:', response);
    console.log('Twitter API Response Status:', response.status);
    console.log('Twitter API Response Data:', response.data);

    // Return the raw HTML content
    return response.data;
  } catch (error) {
    // Log and rethrow the error for handling in the calling code
    console.error('Error fetching tweets:', error.message);
    throw new Error(`Failed to fetch tweets. Server response: ${error.message}`);
  }
};
