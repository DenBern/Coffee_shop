import { AboutUs } from "./AboutUs/AboutUs";
import { OurBest } from "./OurBest/OurBest";
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
          <AboutUs 
            name="coffee_house" 
            section="about-us"
          />
          <OurBest data={this.state.data} />
      </>
    )
  }
}

export default CoffeeHouse;