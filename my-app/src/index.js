import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './components/App/App';
// import  CoffeeHouse from './pages/CoffeeHouse/CoffeeHouse';
import OurCoffee from './pages/OurCoffee/OurCoffee';
// import ProductDetails from './pages/ProductDetails/ProductDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OurCoffee />
  </React.StrictMode>
);

