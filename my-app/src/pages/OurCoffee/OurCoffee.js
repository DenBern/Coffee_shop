import { data } from "../../data/data";
import { Component } from "react";
import { AboutOurBeans } from "./AboutOurBeans/AboutOurBeans";
import { ControlPanel } from "./ControlPanel/ControlPanel";
import { CatalogProducts } from "./CatalogProducts/CatalogProducts";
import { Header } from "../../сommonComponents/Header/Header";
import { PAGES_DESCRIPTION } from "../../constants/constants";
import { PRODUCTS_COUNTRY } from "../../constants/constants";
class OurCoffee extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: data,
        search: '',
        filter: '',
        state: '',
      }
    }

    

  searchCoffeeBeans = (products, search) => {
    if (search.length === 0) {
      return products;
    }

    return products.filter(product => {
      return product.name.toLowerCase().indexOf(search.toLowerCase()) > -1
    })
  }

  onUpdateSearch = (search) => {
    this.setState({search: search});
  }

  filteredProducts = (products, filter) => {
    switch (filter) {
      case PRODUCTS_COUNTRY.BRASIL:
        return products.filter(product => product.country === PRODUCTS_COUNTRY.BRASIL);
      case PRODUCTS_COUNTRY.KENYA:
        return products.filter(product => product.country === PRODUCTS_COUNTRY.KENYA);
      case PRODUCTS_COUNTRY.COLUMBIA:
        return products.filter(product => product.country === PRODUCTS_COUNTRY.COLUMBIA);
      case PRODUCTS_COUNTRY.ITALY:
        return products.filter(product => product.country === PRODUCTS_COUNTRY.ITALY);
        case PRODUCTS_COUNTRY.BELGIUM:
        return products.filter(product => product.country === PRODUCTS_COUNTRY.BELGIUM);
      default:
        return products
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter})
  }

  render() {
    const {data, search, filter} = this.state;
    const visibleProducts = this.filteredProducts(this.searchCoffeeBeans(data, search), filter)
      return (
        <>
            <Header 
              background={PAGES_DESCRIPTION.OUR} 
              description="Our coffee" 
            />
            <main>
              <AboutOurBeans section={PAGES_DESCRIPTION.OUR} />
              <ControlPanel 
                onUpdateSearch={this.onUpdateSearch}
                filter={filter}
                onFilterSelect={this.onFilterSelect} 
              />
              <CatalogProducts products={visibleProducts} />
            </main>
        </>
      )
  }
}

export default OurCoffee;