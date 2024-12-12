import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Tailwind CSS and global styles
import App from './App'; // Import the main App component

// Render the App component to the 'root' element in the HTML
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
