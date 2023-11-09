import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import i18n (needs to be bundled ;))
import App from 'src/App';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
