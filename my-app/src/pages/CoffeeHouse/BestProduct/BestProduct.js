import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/constants'; 


import './BestProduct.css';

const BestProduct = ({name, img, price}) => {
    return (
        <Link to={ROUTES.DETAILS}>
        <li className="best-product_wrapper">
            <div className="best-product">
                <div className='best-product_image'
                    style={
                        {
                            backgroundImage: `url(${img})`,
                        }
                    }>
                </div>
                <div className="best-product_text">
                    <p className="best-product_text_name">{name}</p>
                    <p className="best-product_text_price">{`${price}$`}</p>
                </div>
            </div>
        </li>
        </Link>
    )
}

export default BestProduct;