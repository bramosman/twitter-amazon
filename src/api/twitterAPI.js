// twitterAPI.js
import axios from 'axios';
import { load } from 'cheerio';

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

    // Use the function returned by load to parse the HTML
    const $ = load(response.data);
    const scriptContent = $('script[id="__NEXT_DATA__"]').html();

    if (!scriptContent) {
      console.error('No script content found in HTML.');
      throw new Error('No script content found in HTML.');
    }

    try {
      const jsonData = JSON.parse(scriptContent);
      // Assuming the server returns an array directly
      if (Array.isArray(jsonData)) {
        return jsonData;
      } else {
        console.error('Invalid tweet data received.');
        throw new Error('Invalid tweet data received.');
      }
    } catch (error) {
      console.error('Error parsing JSON data:', error.message);
      throw new Error('Error parsing JSON data.');
    }
  } catch (error) {
    console.error('Error fetching tweets:', error.message);
    throw new Error(`Failed to fetch tweets. Server response: ${error.message}`);
  }
};

export default getTweets;
