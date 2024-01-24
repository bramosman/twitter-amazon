// MainContainer.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getTweets } from '../api/twitterAPI.js';
import { db, addDoc, collection } from '../api/firebaseConfig'; // Adjust the path based on your project structure

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
        const tweetData = await getTweets('#matterport');

        if (Array.isArray(tweetData)) {
          setTweets(tweetData);

          // Add tweets to Firestore
          await Promise.all(tweetData.map(tweet => {
            const tweetsCollectionRef = collection(db, 'tweets');
            return addDoc(tweetsCollectionRef, {
              text: tweet.text,
              author: tweet.author,
              timestamp: new Date(tweet.timestamp),
              // Add other fields as needed
            });
          }));

          setError(null);
        } else {
          setError('Invalid tweet data received.');
        }
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
        <div>
          {tweets && tweets.length > 0 ? (
            tweets.map((tweet, index) => (
              <div key={index}>
                <p>{tweet.text}</p>
                <p>{tweet.author}</p>
              </div>
            ))
          ) : (
            <p>No tweets available.</p>
          )}
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </MainContentWrapper>
  );
};

export default MainContainer;
