// pages/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../pages/App.js';  // Correct the import path
import reportWebVitals from './reportWebVitals.js';
import { decodedToken } from '../pages/decodeToken.js';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

console.log(decodedToken);

reportWebVitals();
