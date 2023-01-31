export const CoffeeItems = ({coffee, img, price}) => {
    return (
        <li className="item_wrapper">
            <div className="item">
                <img src={img} alt=""></img>
                <p className="item_description">{coffee}</p>
                <p className={price + '$'}></p>
            </div>
        </li>
    )
}