import { NavigationList } from '../NavigationList/NavigationList';
import {HeaderContent} from './HeaderContent/HeaderContent';

import './Header.css';

import coffeeHeaderBackground from '../../assets/png/coffee_house_background_header.png';
import coffeeOurCoffeeBackground from '../../assets/png/coffee_our_background_header.png';

export const Header = ({background, description}) => {
    return (
        <header>
            <div 
                className="header"
                style={{background: `url(${background === 'coffee' ? coffeeHeaderBackground : coffeeOurCoffeeBackground})`,
                backgroundSize: 'cover'}}>
                <NavigationList name='header'/>
                <HeaderContent description={description}/>
            </div>
        </header>
    )
}