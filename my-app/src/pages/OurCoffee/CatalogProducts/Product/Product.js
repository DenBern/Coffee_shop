import './Product.css';

export const Product = ({name, img, price, country}) => {
    return (
        <li className="catalog-product_wrapper">
            <div className="catalog-product">
                <div 
                    className="catalog-product_image"
                    style={
                        {
                            backgroundImage: `url(${img})`
                        }
                    }>
                </div>
                <div className="catalog-product_description">
                    <p className="catalog-product_name">{name}</p>
                    <p className="catalog-product_country">{country}</p>
                    <p className="catalog-product_price">{`${price}$`}</p>
                </div>
            </div>
        </li>
    )
}
    