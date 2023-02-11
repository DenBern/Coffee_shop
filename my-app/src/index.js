import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './components/App/App';
import  CoffeeHouse from './pages/CoffeeHouse/CoffeeHouse';
// import OurCoffee from './pages/OurCoffee/OurCoffee';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CoffeeHouse />
  </React.StrictMode>
);

