// server.js
import express from 'express';
import cors from 'cors';
import { getTweets } from './api/twitterAPI.js'; // Adjust the path based on your project structure
import { db } from './api/firebaseConfig'; // Adjust the path based on your project structure
import { collection, getDocs } from 'firebase/firestore'; // Import Firestore functions

const app = express();

// Use the 'cors' middleware to handle CORS headers
app.use(cors());

app.get('/tweets', async (req, res) => {
  try {
    const tweetData = await getTweetsFromFirestore();
    res.header('Content-Type', 'application/json');
    res.status(200).json(tweetData);
  } catch (error) {
    console.error('Error fetching and processing tweets:', error);
    res.header('Content-Type', 'application/json');
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Cloud Function to get tweets from Firestore
const getTweetsFromFirestore = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'tweets'));
    const tweetsData = querySnapshot.docs.map(doc => doc.data());
    return tweetsData;
  } catch (error) {
    console.error('Error fetching tweets from Firestore:', error);
    throw new Error('Failed to fetch tweets.');
  }
};

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
