import axios from 'axios';

const BASE_URL = 'https://react-twitter-gray.vercel.app';

export const getTweets = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/tweets`, {
      params: { query },
      headers: {
        'Accept': 'application/json', // Set Accept header to request JSON
      },
    });

    console.log('Twitter API Full Response:', response);
    console.log('Twitter API Response Status:', response.status);
    console.log('Twitter API Response Data:', response.data);

    // Assuming the server returns an array directly
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      console.error('Invalid tweet data received.');
      throw new Error('Invalid tweet data received.');
    }
  } catch (error) {
    console.error('Error fetching tweets:', error.message);
    throw new Error(`Failed to fetch tweets. Server response: ${error.message}`);
  }
};

export default getTweets;
