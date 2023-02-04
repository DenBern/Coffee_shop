import { Component } from 'react';
import { Header } from '../Header/Header';
import { AboutUs } from '../AboutUs/AboutUs';
import { OurBest } from '../OurBest/OurBest';
import { Footer } from '../Footer/Footer';
import {data} from '../../data/data';

import './App.css';
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
