import { Header } from "../Header/Header";
import { AboutSection } from "../AboutSection/AboutSection";
import { OurBestSection } from "./OurBestSection/OurBestSection";
import { Footer } from "../Footer/Footer";
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
    <div>
      <Header background='coffee' description='Coffee house' />
      <AboutSection name='Coffee house'/>
      <OurBestSection data={this.state.data} />
      <Footer />
    </div>
  )
  }
}

export default CoffeeHouse;