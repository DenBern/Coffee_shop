import { Component } from 'react';
import { Header } from '../Header/Header';
import { AboutUs } from '../AboutUs/AboutUs';
import { OurBest } from '../OurBest/OurBest';
import { Footer } from '../Footer/Footer';
import { data } from '../../data/data';

import './App.css';

//Best
import solimoCoffee from '../../assets/png/solimo_coffee.png'
import prestoCoffee from '../../assets/png/presto_coffee.png'
import aromisticoCoffee from '../../assets/png/solimo_coffee.png'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    }
  }

render () {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <OurBest data={this.state.data} />
      <Footer />
    </div>
  );
}
}
export default App;
