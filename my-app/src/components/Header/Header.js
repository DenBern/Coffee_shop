import { NavigationList } from '../NavigationList/NavigationList';
import { Divider } from '../Divider/Divider';

import './Header.css';

export const Header = () => {
    return (
        <div className="header_main">
            <div className="background">
                <NavigationList name='header' />
                <div className="desctiption_header">
                    <h1>Everything You Love About Coffee</h1>
                    <Divider color='white' />
                    <p className="">We makes every day full of energy and taste</p>
                    <p className="">Want to try our beans?</p>
                    <button className="button_more" type="button">More</button>
                </div>
            </div>s
        </div>   
    )
}