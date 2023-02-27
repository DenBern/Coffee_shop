import { Component } from 'react';
import { BrowserRouter as Routers, Route } from 'react-router-dom';

import { Header } from '../сommonComponents/Header/Header';

import { AboutUs } from '../pages/CoffeeHouse/AboutUs/AboutUs';
import { OurBest } from '../pages/CoffeeHouse/OurBest/OurBest';

import { AboutOurBeans } from '../pages/OurCoffee/AboutOurBeans/AboutOurBeans';
import { ControlPanel } from '../pages/OurCoffee/ControlPanel/ControlPanel';
import { CatalogProducts } from '../pages/OurCoffee/CatalogProducts/CatalogProducts';

import { Footer } from '../сommonComponents/Footer/Footer';
import {data} from '../data/data';

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

  searchCoffeeBeans = (products, search) => {
    if (search.length === 0) {
      return products;
    }

    return products.filter(product => {
      return product.name.toLowerCase().indexOf(search.toLowerCase()) > -1
    })
  }

  onUpdateSearch = (search) => {
    this.setState({search: search});
  }

  filteredProducts = (products, filter) => {
    switch (filter) {
      case 'Brazil':
        return products.filter(product => product.country === 'Brazil');
      case 'Kenya':
        return products.filter(product => product.country === 'Kenya');
      case 'Columbia':
        return products.filter(product => product.country === 'Columbia');
      case 'Italy':
        return products.filter(product => product.country === 'Italy');
        case 'Belgium':
        return products.filter(product => product.country === 'Belgium');
      default:
        return products
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter})
  }

render () {
  const {data, search, filter} = this.state;
  const visibleProducts = this.filteredProducts(this.searchCoffeeBeans(data, search), filter)

  return (
    <Routers>
      <div className="app">
        <Header />

        <main>

            <AboutUs 
              name="coffee_house" 
              section="about-us"
            />
            <OurBest data={this.state.data} />

            <AboutOurBeans 
              title="About our beans"  
              section="about-our-beans"/>
            <ControlPanel 
              onUpdateSearch={this.onUpdateSearch}
              filter={filter}
              onFilterSelect={this.onFilterSelect} />
            <CatalogProducts products={visibleProducts} />
            
        </main>

        <Footer />
      </div>
    </Routers>
  );
}
}
export default App;
