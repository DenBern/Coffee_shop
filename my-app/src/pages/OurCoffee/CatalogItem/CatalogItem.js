import './CatalogItem.css';

export const CatalogItem = ({coffee, img, price}) => {
    return (
        <li className="catalog-product_wrapper">
            <div className="catalog-product">
                <div 
                    className="catalog-product_image"
                    style={{backgroundImage: `url(${img})`}}>
                </div>
                <div className="catalog-product_description">
                    <p className="catalog-product_name">{coffee}</p>
                    <p className="catalog-product_price">{`${price}$`}</p>
                </div>
            </div>
        </li>
    )
}
    