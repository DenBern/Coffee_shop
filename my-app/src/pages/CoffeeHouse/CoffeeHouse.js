import { AboutUs } from "./AboutUs/AboutUs";
import { OurBest } from "./OurBest/OurBest";
import { Header } from "../../сommonComponents/Header/Header";
import { Component } from "react";
import { data } from "../../data/data";
import { ROUTES } from "../../constants/constants";
import { PAGES_DESCRIPTION } from "../../constants/constants";
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
            background={ROUTES.MAIN}
            description={PAGES_DESCRIPTION.MAIN} 
          />
          <main>
            <AboutUs />
            <OurBest data={this.state.data} />
          </main>
      </>
    )
  }
}

export default CoffeeHouse;