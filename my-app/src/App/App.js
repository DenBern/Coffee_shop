import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import CoffeeHouse from '../pages/CoffeeHouse/CoffeeHouse';
import OurCoffee from '../pages/OurCoffee/OurCoffee';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import { Footer } from '../сommonComponents/Footer/Footer';
import { ROUTES } from '../constants/constants';

import './App.css';
class App extends Component {
  render () {
    return (
        <div className="app">
              <Routes>
                <Route path="/*" element={<CoffeeHouse />} />
                <Route path={ROUTES.OUR} element={<OurCoffee />} />
                <Route path={ROUTES.DETAILS} element={<ProductDetails />} />
              </Routes>
          <Footer />
        </div>
    );
  }
}

export default App;
