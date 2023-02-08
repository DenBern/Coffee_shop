import './BestItem.css';

const BeastItem = ({coffee, img, price}) => {
    return (
        <li className="item_wrapper">
            <div className="item_coffee">
                <div 
                    className='coffee_item_image'
                    style={{backgroundImage: `url(${img})`}}>
                </div>
                <div className="item_wrapper_name_price">
                    <p className="item_name">{coffee}</p>
                    <p className="item_price">{`${price}$`}</p>
                </div>
            </div>
        </li>
    )
}

export default BeastItem;