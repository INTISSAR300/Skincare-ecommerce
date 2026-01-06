import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './testCounter';
import Hero from './components/hero/hero';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Hero/> */}
  
  
  </React.StrictMode>
);
reportWebVitals();
