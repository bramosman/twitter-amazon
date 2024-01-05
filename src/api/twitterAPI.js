// twitterAPI.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/tweets';

export const getTweets = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}?query=${query}`);
    console.log('Twitter API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching tweets:', error.message);
    throw new Error(`Failed to fetch tweets. Server response: ${error.message}`);
  }
};
