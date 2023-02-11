import { Title } from '../../../сommonComponents/Title/Title';
import { Divider } from '../../../сommonComponents/Divider/Divider';

import coffeeBeansDetails from '../../../assets/png/coffee_beans_details.png';
import './ProductDescription.css';

const ProductDescription = () => {
  return (
    <section className="product-description_wrapper">
      <div className="product-description-image"
        style={{backgroundImage: `url(${coffeeBeansDetails})`}}>
      </div>
      <div className="product-description-details">
        <Title title="About it" />
        <Divider />
        <div className="product-description-details_text">
          <p><b>Country:</b> Brasil</p>
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

export default ProductDescription;