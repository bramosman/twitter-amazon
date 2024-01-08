// src/components/MainContainer.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getTweets } from '../api/twitterAPI.js';

const MainContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
`;

const MainContainer = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch tweets using the getTweets function
        const response = await getTweets('#matterport');
        console.log('Twitter API Response:', response);

        // Check if the response is undefined or doesn't have a 'length' property
        if (response === undefined || !response.length) {
          throw new Error('No tweets found.');
        }

        // Update state with fetched tweets
        setTweets(response);
        // Clear any previous errors
        setError(null);
      } catch (error) {
        // Handle error
        console.error('Error fetching tweets:', error);

        // Set an error message for user display
        setError(error.message || 'Error loading tweets. Please try again later.');
      } finally {
        // Set loading to false regardless of success or failure
        setLoading(false);
      }
    };

    // Call fetchData function when the component mounts
    fetchData();
  }, []); // The empty dependency array ensures the effect runs only once, similar to componentDidMount

  return (
    <MainContentWrapper>
      <h2>Main Content</h2>
      {loading ? (
        <p>Loading tweets...</p>
      ) : tweets.length === 0 ? (
        <p>No tweets to display.</p>
      ) : (
        <ul>
          {tweets.map((tweet) => (
            <li key={tweet.id} style={{ marginBottom: '10px' }}>
              {tweet.text}
            </li>
          ))}
        </ul>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </MainContentWrapper>
  );
};

export default MainContainer;
