import { Component } from 'react';
import { Header } from '../Header/Header';
import { AboutSection } from '../AboutSection/AboutSection';
import { CoffeeBeansListSection } from '../CoffeeBeansListSection/CoffeeBeansListSection';
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
      <AboutSection />
      <CoffeeBeansListSection data={this.state.data} />
      <Footer />
    </div>
  );
}
}
export default App;
