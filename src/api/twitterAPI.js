import axios from 'axios';

const TWEETS_COLLECTION = 'tweets';

export const getTweets = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/tweets`, {
      params: { query },
      headers: {
        'Accept': 'application/json', // Set the Accept header for JSON
      },
    });

    console.log('Twitter API Request URL:', `${BASE_URL}/tweets`);
    console.log('Twitter API Request Parameters:', { query });
    console.log('Twitter API Response Content-Type:', response.headers['content-type']);
    console.log('Twitter API Response Data:', response.data);

    // Assuming the server returns an array directly
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      console.error('Invalid tweet data received.');
      throw new Error('Invalid tweet data received.');
    }
  } catch (error) {
    console.error('Error fetching tweets from Firestore:', error);
    throw new Error('Failed to fetch tweets.');
  }
};


export default getTweets;
