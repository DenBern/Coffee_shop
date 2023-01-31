import { Component } from 'react';
import './App.css';
import { Header } from '../Header/Header';
import { AboutUs } from '../AboutUs/AboutUs';
import { OurBest } from '../OurBest/OurBest';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {coffee: 'Solimo Coffee Beans 2 kg', country: 'Belgium', img: '', price: 10.73, best: true, id:1},
        {coffee: 'Presto Coffee Beans 1 kg', country: 'Italy', img: '', price: 15.99, best: true, id:2},
        {coffee: 'AROMISTICO Coffee 1 kg', country: 'Italy', img: '', price: 6.99, best: true, id:3},
        {coffee: 'AROMISTICO Coffee 1 kg', country: 'Brazil', img: '', price: 6.99, best: false, id:4},
        {coffee: 'AROMISTICO Coffee 1 kg', country: 'Brazil', img: '', price: 6.99, best: false, id:5},
        {coffee: 'AROMISTICO Coffee 1 kg', country: 'Brazil', img: '', price: 6.99, best: false, id:6},
        {coffee: 'AROMISTICO Coffee 1 kg', country: 'Brazil', img: '', price: 6.99, best: false, id:7},
        {coffee: 'AROMISTICO Coffee 1 kg', country: 'Kenya', img: '', price: 6.99, best: false, id:8},
        {coffee: 'AROMISTICO Coffee 1 kg', country: 'Columbia', img: '', price: 6.99, best: false, id:9},
      ]
    }
  }

render () {

  return (
    <div className="App">
      <Header />
      <AboutUs />
      <OurBest data={this.state.data}/>
    </div>
  );
}
}
export default App;
