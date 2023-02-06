import { NavigationList } from '../NavigationList/NavigationList';
import coffeeBeansWhiteFill from '../../assets/png/coffee_beans_white_fill.png';

import './Header.css';

export const Header = ({ setActivePage }) => {
    return (
        <div className="header_main">
            <div className="background">
                <NavigationList usePlace={'header'} setActivePage={setActivePage} />
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
                    <p>We makes every day full of energy and taste</p>
                    <p>Want to try our beans?</p>
                    <button className="button_more" type="button">More</button>
                </div>
            </div>
        </div>   
    )
}