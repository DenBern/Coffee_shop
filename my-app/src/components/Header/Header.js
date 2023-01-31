import './Header.css';
import coffeeBeansWhite from '../../assets/png/coffee_beans_white.png';
import coffeeBeansWhiteFill from '../../assets/png/coffee_beans_white_fill.png';

export const Header = () => {
    return (
        <div className="header_main">
            <div className="background">
                <div className="navigation">
                <img src={coffeeBeansWhite} alt="coffee_beans_white"/>
                    <nav>
                        <ul className="items">
                            <li className="item"><a href="#">Coffee house</a></li>
                            <li className="item"><a href="#">Our coffee</a></li>
                            <li className="item"><a href="#">For your pleasure</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="desctiption_header">
                    <h1>Everything You Love About Coffee</h1>
                    <div className="coffee_lines">
                        <div>
                            <hr></hr>
                        </div>
                        <img src={coffeeBeansWhiteFill} alt="coffee_beans_white_fill" />
                        <div>
                            <hr></hr>
                        </div>
                    </div>
                    <p className="">We makes every day full of energy and taste</p>
                    <p className="">Want to try our beans?</p>
                    <button className="button_more" type="button">More</button>
                </div>
            </div>
        </div>   
    )
}