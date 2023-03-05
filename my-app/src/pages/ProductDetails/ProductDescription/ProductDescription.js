import { Divider } from '../../../сommonComponents/Divider/Divider';
import { data } from '../../../data/data';


import { Component } from 'react';

import coffeeBeansDetails from '../../../assets/png/coffee_beans_details.png';
import './ProductDescription.css';

class ProductDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    }
  }
 
  render () {
    return (
      <section className="product-description_wrapper">
        <div className="product-description-image"
          style={
            {
              backgroundImage: `url(${coffeeBeansDetails})`,
            }
          }>
        </div>
        <div className="product-description-details">
          <h2>About it</h2>
          <Divider />
          <div className="product-description-details_text">
            <p><b>Country:</b> Brazil</p>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
              enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
              aliquip ex ea commodo consequat.
            </p>
            <p><b>Price:</b>  <span>16.99$</span></p>
          </div>
        </div>
      </section>
    )
  }
}

export default ProductDescription;