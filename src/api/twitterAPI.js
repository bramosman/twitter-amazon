// twitterAPI.js
import axios from 'axios';

const BASE_URL = 'https://react-twitter-gray.vercel.app';

export const getTweets = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/tweets`, {
      params: { query },
      headers: {
        'Accept': 'text/html', // Accept HTML response
      },
    });

    console.log('Twitter API Full Response:', response);
    console.log('Twitter API Response Status:', response.status);
    
    // Extract JSON data from HTML response
    const jsonData = extractJsonFromHtml(response.data);

    // Assuming the server returns an array directly
    if (Array.isArray(jsonData)) {
      return jsonData;
    } else {
      console.error('Invalid tweet data received.');
      throw new Error('Invalid tweet data received.');
    }
  } catch (error) {
    console.error('Error fetching tweets:', error.message);
    throw new Error(`Failed to fetch tweets. Server response: ${error.message}`);
  }
};

// Function to extract JSON data from HTML
const extractJsonFromHtml = (htmlData) => {
  // Implement logic to extract JSON data from the HTML response
  // For example, you can use a library like cheerio or regex
  // Replace the following line with your implementation
  return { data: 'Extracted JSON data from HTML' };
};

export default getTweets;
