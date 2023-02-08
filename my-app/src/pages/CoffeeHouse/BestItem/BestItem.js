import './BestItem.css';

const BeastItem = ({coffee, img, price}) => {
    return (
        <li className="best-item_wrapper">
            <div className="best-item">
                <div className='best-item_image'
                     style={{backgroundImage: `url(${img})`}}>
                </div>
                <div className="best-item_text">
                    <p className="best-item_text_name">{coffee}</p>
                    <p className="best-item_text_price">{`${price}$`}</p>
                </div>
            </div>
        </li>
    )
}

export default BeastItem;