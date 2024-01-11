// twitterAPI.js
import axios from 'axios';

const BASE_URL = 'https://react-twitter-gray.vercel.app';

export const getTweets = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/tweets`, {
      params: { query },
    });

    console.log('Twitter API Full Response:', response);
    console.log('Twitter API Response Status:', response.status);
    console.log('Twitter API Response Data:', response.data);

    return response.data; // Assuming the server directly returns an array of tweet objects
  } catch (error) {
    console.error('Error fetching tweets:', error.message);
    throw new Error(`Failed to fetch tweets. Server response: ${error.message}`);
  }
};

export default getTweets;
