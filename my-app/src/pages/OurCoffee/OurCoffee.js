import { data } from "../../data/data";
import { Component } from "react";
import { Header } from "../../сommonComponents/Header/Header";
import { AboutOurBeans } from "./AboutOurBeans/AboutOurBeans";
import Search from "./ControlPanel/Search/Search";
import { ControlPanel } from "./ControlPanel/ControlPanel";
import { CatalogProducts } from "./CatalogProducts/CatalogProducts";
import { Footer } from "../../сommonComponents/Footer/Footer";

class OurCoffee extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: data,
        search: '',
      }
    }

  searchCoffeeBeans = (products, search) => {
    if (search.length === 0) {
      return products;
    }

    return products.filter(product => {
      return product.name.indexOf(search) > -1
    })
  }

  onUpdateSearch = (search) => {
    this.setState({search: search});
  }

  render() {
    const {data, search} = this.state;
    const visibleProducts = this.searchCoffeeBeans(data, search)
    return (
      <>
        <Header 
          background="our" 
          description="Our coffee"/>
        <main>
          <AboutOurBeans 
            title="About our beans"  
            section="about-our-beans"/>
          <ControlPanel 
            data={data} 
            onUpdateSearch={this.onUpdateSearch}/>
          <CatalogProducts products={visibleProducts}/>
        </main>
        <Footer />
      </>
    )
    }
}

export default OurCoffee;