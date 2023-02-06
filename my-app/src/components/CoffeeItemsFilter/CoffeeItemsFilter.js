import './CoffeeItemsFilter.css';

export const CoffeeItemsFilter = ({coffee, img, price}) => {
        return (
            <li className="item_filter_wrapper">
                <div className="item_filter_coffee">
                    <div 
                        className='coffee_filter_item_image'
                        style={{backgroundImage: `url(${img})`}}>
                    </div>
                    <div className="item_filter_wrapper_name_price">
                        <p className="item_filter_name">{coffee}</p>
                        <p className="item_filter_price">{`${price}$`}</p>
                    </div>
                </div>
            </li>
        )
}
    