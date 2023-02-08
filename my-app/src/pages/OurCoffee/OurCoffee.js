import { Component } from "react";
import { Header } from "../../сommonComponents/Header/Header";
import { AboutContent } from '../../сommonComponents/AboutContent/AboutContent'
import { Footer } from "../../сommonComponents/Footer/Footer";
import { data } from "../../data/data";
import { SearchFilterSection } from "./SearchFilterSection/SearchFilterSection";

class OurCoffee extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: data,
      }
    }

  render() {
    return (
      <div>
        <Header 
          background='our' 
          description='Our coffee' />
        <AboutContent name='our_coffee' />
        <SearchFilterSection data={this.state.data}/>
        <Footer />
      </div>
    )
    }
}

export default OurCoffee;