import { Component } from "react";
import { Header } from "../../сommonComponents/Header/Header";
import { AboutOurBeans } from "./AboutOurBeans/AboutOurBeans"
import { Footer } from "../../сommonComponents/Footer/Footer";
import { SearchFilterSection } from "./SearchFilterSection/SearchFilterSection";
import { data } from "../../data/data";
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
          background="our" 
          description="Our coffee" 
        />
        <AboutOurBeans title="About our beans"  section="about-our-beans"/>
        <SearchFilterSection data={this.state.data}/>
        <Footer />
      </div>
    )
    }
}

export default OurCoffee;