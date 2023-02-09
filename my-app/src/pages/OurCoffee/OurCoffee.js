import { data } from "../../data/data";
import { Component } from "react";
import { Header } from "../../сommonComponents/Header/Header";
import { AboutOurBeans } from "./AboutOurBeans/AboutOurBeans";
import { ControlPanel } from "./ControlPanel/ControlPanel";
import { CatalogProducts } from "./CatalogProducts/CatalogProducts";
import { Footer } from "../../сommonComponents/Footer/Footer";

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
          <ControlPanel data={this.state.data}/>
          <CatalogProducts data={this.state.data}/>
        </main>
        <Footer />
      </div>
    )
    }
}

export default OurCoffee;