import { Header } from "../../сommonComponents/Header/Header";
import ProductDescription from "./ProductDescription/ProductDescription";
import { Component } from "react";
import { ROUTES } from "../../constants/constants";
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
          background={ROUTES.OUR} 
          description={ROUTES.OUR}
        />
        <main>
          <ProductDescription />
        </main>
      </>
    )
  }
}

export default ProductDetails;