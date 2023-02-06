import { Component } from 'react';
import { Header } from '../Header/Header';
import { AboutUs } from '../AboutUs/AboutUs';
import { OurBest } from '../OurBest/OurBest';
import { Footer } from '../Footer/Footer';
import { data } from '../../helpers/data';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      activePage: sessionStorage.getItem('activePage'),
    }
  }

  componentDidMount() {
    !Boolean(sessionStorage.getItem('activePage')) && sessionStorage.setItem('activePage', 'main');
  }

  setActivePage = (pageId) => {
    this.setState({
      activePage: pageId,
    })
  }

  renderActivePageContent = () => {
    switch(this.state.activePage){
      case 'main':
        return (
          <>
            <Header setActivePage={(id) => this.setActivePage(id)} />
            <AboutUs />
            <OurBest data={this.state.data}  />
            {/* <Footer /> */}
          </>
        )
        break;
      case 'detailsPage':
        return (
          <>
            <Header setActivePage={(id) => this.setActivePage(id)} />
            <OurBest data={this.state.data} />
            {/* <Footer /> */}
          </>
        );
      case 'other':
        return (
          <>
            <Header setActivePage={(id) => this.setActivePage(id)} />
            <AboutUs />
            {/* <Footer /> */}
          </>
        )
      default:
          return <div>404  Page not found</div>
    }
  }

render () {
  return (
    <div className="App">
      {this.renderActivePageContent()}
    </div>
  );
}
}
export default App;
