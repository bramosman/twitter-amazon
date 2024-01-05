// src/components/FirestoreExample.js
import React, { useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../index';

const FirestoreExample = () => {
  useEffect(() => {
    const addTestDocument = async () => {
      try {
        const docRef = await addDoc(collection(db, 'testCollection'), {
          message: 'This is a test document in Firestore!'
        });
        console.log('Document written with ID:', docRef.id);
      } catch (error) {
        console.error('Error adding document:', error);
      }
    };

    addTestDocument();
  }, []); // Run only once on component mount

  return (
    <div>
      <h2>Firestore Example</h2>
      <p>Welcome to the Firestore Example component!</p>
    </div>
  );
};

export default FirestoreExample;
