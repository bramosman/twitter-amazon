// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.js'; // Include the .js extension
import reportWebVitals from './reportWebVitals.js'; // Include the .js extension
import { decodedToken } from './decodeToken.js';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

console.log(decodedToken);

reportWebVitals();
