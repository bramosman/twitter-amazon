// src/components/MainContainer.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getTweets } from '../api/twitterAPI.js';

const MainContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
`;

const MainContainer = () => {
  const [tweets, setTweets] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTweets('#matterport');
        setTweets(response);
        setError(null);
      } catch (error) {
        console.error('Error fetching tweets:', error);
        setError('Error loading tweets. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <MainContentWrapper>
      <h2>Main Content</h2>
      {loading ? (
        <p>Loading tweets...</p>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: tweets }} />
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </MainContentWrapper>
  );
};

export default MainContainer;
