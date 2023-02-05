import { Header } from "../Header/Header";
import { AboutSection } from "../AboutSection/AboutSection";
import { Footer } from "../Footer/Footer";
import { Component } from "react";
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
      <Header background='our' description='Our coffee' />
      <AboutSection name='Our coffee'/>
      <SearchFilterSection />
      <Footer />
    </div>
  )
  }
}

export default OurCoffee;