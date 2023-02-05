import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './components/App/App';
// import  CoffeeHouse from './components/PageCoffeeHouse/CoffeeHouse';
import OurCoffee from './components/PageOurCoffee/OurCoffee';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OurCoffee />
  </React.StrictMode>
);

