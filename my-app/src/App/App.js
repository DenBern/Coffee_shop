import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import {data} from '../data/data';

import { Header } from '../сommonComponents/Header/Header';
import CoffeeHouse from '../pages/CoffeeHouse/CoffeeHouse';
import OurCoffee from '../pages/OurCoffee/OurCoffee';
import { Footer } from '../сommonComponents/Footer/Footer';

import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      search: '',
      filter: '',
    }
  }

render () {
  return (
      <div className="app">
        <Header />
        <main>
            <Routes>
              <Route path="/*" element={<CoffeeHouse />} />
              <Route path="/ourcoffee" element={<OurCoffee />} />
            </Routes>
        </main>
        <Footer />
      </div>
  );
}
}
export default App;
