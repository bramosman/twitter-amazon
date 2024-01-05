// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCzgwX5c7nqCQvUOeDWnuC9bxe3YfiZbcE",
  authDomain: "twitter-67501.firebaseapp.com",
  projectId: "twitter-67501",
  storageBucket: "twitter-67501.appspot.com",
  messagingSenderId: "911458836069",
  appId: "1:911458836069:web:39b552be4e931654a0708c",
  measurementId: "G-JBSDPNXST8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
