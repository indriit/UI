import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Zorg ervoor dat je een App-component hebt in src/App.tsx
import './index.css';

const root = document.getElementById('root');
if (!root) {
    throw new Error('Root element not found.'); // Dit helpt bij het debuggen
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
