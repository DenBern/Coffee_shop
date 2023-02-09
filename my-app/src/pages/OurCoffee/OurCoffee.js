import { data } from "../../data/data";
import { Component } from "react";
import { Header } from "../../сommonComponents/Header/Header";
import { AboutOurBeans } from "./AboutOurBeans/AboutOurBeans"
import { Footer } from "../../сommonComponents/Footer/Footer";
import { SearchFilterSection } from "./SearchFilterSection/SearchFilterSection"
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
        <main>
          <AboutOurBeans 
            title="About our beans"  
            section="about-our-beans"
          />
          <SearchFilterSection data={this.state.data}/>
        </main>
        <Footer />
      </div>
    )
    }
}

export default OurCoffee;