import './Header.css';
import coffeeBeans from '../../assets/png/coffee_beans.png'
import coffeeBeans2 from '../../assets/png/coffee_beans_2.png'

export const Header = () => {
    return (
        <div className="header_main">
            <div className="background">
                <div className="navigation">
                <img src={coffeeBeans} alt="coffee_beans"/>
                    <nav>
                        <ul className="items">
                            <li className="item">Coffee house</li>
                            <li className="item">Our coffee</li>
                            <li className="item">For your pleasure</li>
                        </ul>
                    </nav>
                </div>
                <div className="desctiption_header">
                    <h1>Everything You Love About Coffee</h1>
                    <div className="coffee_lines">
                        <div>
                            <hr></hr>
                        </div>
                        <img src={coffeeBeans2} alt="coffee_beans" />
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