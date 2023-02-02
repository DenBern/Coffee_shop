import './CoffeeItems.css';

export const CoffeeItems = ({coffee, img, price}) => {
    return (
        <li className="item_wrapper">
            <div className="item_coffee">
                <img src={img} alt=""></img>
                <div className="item_wrapper_name_price">
                    <p className="item_name">{coffee}</p>
                    <p className="item_price">{`${price}$`}</p>
                </div>
            </div>
        </li>
    )
}