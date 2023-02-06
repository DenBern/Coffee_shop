import './CoffeeItems.css';

export const CoffeeItems = ({coffee, img, price}) => {
    console.log(img)
    return (
        <li className="item_wrapper">
            <div className="item_coffee">
                <div
                    className='image'
                    style={{
                        backgroundImage: `url(${img})`,
                    }}
                />
                <div className="item_wrapper_name_price">
                    <p className="item_name">{coffee}</p>
                    <p className="item_price">{`${price}$`}</p>
                </div>
            </div>
        </li>
    )
}