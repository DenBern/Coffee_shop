import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import App from './App/App';
import CoffeeHouse from './pages/CoffeeHouse/CoffeeHouse';
import OurCoffee from './pages/OurCoffee/OurCoffee';

import './index.css';
// import App from './App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

