import { AboutUs } from "./AboutUs/AboutUs";
import { OurBest } from "./OurBest/OurBest";
import { Header } from "../../сommonComponents/Header/Header";
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
            background="coffee" 
            description="Coffee house" />
          <main>
            <AboutUs 
              name="coffee_house" 
              section="about-us"
            />
            <OurBest data={this.state.data} />
          </main>
      </>
    )
  }
}

export default CoffeeHouse;