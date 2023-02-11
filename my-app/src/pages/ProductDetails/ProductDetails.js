import { Header } from "../../сommonComponents/Header/Header";
import ProductDescription from "./ProductDescription/ProductDescription";
import { Footer } from "../../сommonComponents/Footer/Footer";
import { Component } from "react";
import { data } from "../../data/data";

class ProductDetails extends Component {
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
          background="our" 
          description="Our coffee"
        />
        <ProductDescription />
        <Footer />
      </>
    )
  }
}

export default ProductDetails;