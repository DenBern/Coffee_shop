import { Component } from 'react';
import { Header } from '../Header/Header';
import { AboutUs } from '../AboutUs/AboutUs';
import { OurBest } from '../OurBest/OurBest';
import { Footer } from '../Footer/Footer';

import './App.css';

//Best
import solimoCoffee from '../../assets/png/solimo_coffee.png'
import prestoCoffee from '../../assets/png/presto_coffee.png'
import aromisticoCoffee from '../../assets/png/solimo_coffee.png'

//NavigationList
import blackBeans from '../../assets/png/coffee_beans_black.png';
import whiteBeans from '../../assets/png/coffee_beans_white.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {coffee: 'Solimo Coffee Beans 2 kg', country: 'Belgium', img: solimoCoffee, price: 10.73, best: true, id:1},
        {coffee: 'Presto Coffee Beans 1 kg', country: 'Italy', img: prestoCoffee, price: 15.99, best: true, id:2},
        {coffee: 'AROMISTICO Coffee 1 kg', country: 'Italy', img: aromisticoCoffee, price: 6.99, best: true, id:3},
        {coffee: 'AROMISTICO Coffee 1 kg', country: 'Brazil', img: '', price: 6.99, best: false, id:4},
        {coffee: 'AROMISTICO Coffee 1 kg', country: 'Brazil', img: '', price: 6.99, best: false, id:5},
        {coffee: 'AROMISTICO Coffee 1 kg', country: 'Brazil', img: '', price: 6.99, best: false, id:6},
        {coffee: 'AROMISTICO Coffee 1 kg', country: 'Brazil', img: '', price: 6.99, best: false, id:7},
        {coffee: 'AROMISTICO Coffee 1 kg', country: 'Kenya', img: '', price: 6.99, best: false, id:8},
        {coffee: 'AROMISTICO Coffee 1 kg', country: 'Columbia', img: '', price: 6.99, best: false, id:9},
      ],
      navigation: [
        {name: 'white', img: {whiteBeans}, color: '#000000'},
        {name: 'black', img: {blackBeans}, color: '#FFFFFF'},
      ],
      
    }
  }

render () {
  return (
    <div className="App">
      <Header whiteNavigation={this.state.navigation} />
      <AboutUs />
      <OurBest data={this.state.data} />
      <Footer blackNavigation={this.state.navigation} />
    </div>
  );
}
}
export default App;
