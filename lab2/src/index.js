import React from 'react';
import ReactDOM from 'react-dom/client'; // Зверніть увагу на цей імпорт
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Використовуємо createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
