import { Header } from "../../сommonComponents/Header/Header";
import { AboutSection } from "../../сommonComponents/AboutSection/AboutSection";
import { OurBestSection } from "./OurBestSection/OurBestSection";
import { Footer } from "../../сommonComponents/Footer/Footer";
import { Component } from "react";
import { data } from "../../data/data";

class CoffeeHouse extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: data,
      }
    }

  render() {
    return (
      <>
        <Header 
          background='coffee' 
          description='Coffee house' />
        <AboutSection name='Coffee house'/>
        <OurBestSection data={this.state.data} />
        <Footer />
      </>
    )
  }
}

export default CoffeeHouse;