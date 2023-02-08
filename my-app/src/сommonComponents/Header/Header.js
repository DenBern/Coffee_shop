import { NavigationList } from '../NavigationList/NavigationList';

import './Header.css';

import coffeeHeaderBackground from '../../assets/png/coffee_house_background_header.png';
import coffeeOurCoffeeBackground from '../../assets/png/coffee_our_background_header.png';
import { Title } from './Title/Title';
import { Divider } from '../Divider/Divider';



export const Header = ({background, description}) => {
    console.log(description)
    return (
        <>
            <div className="header_main">
                <div className="background"
                    style={{background: `url(${background === 'coffee' ? coffeeHeaderBackground : coffeeOurCoffeeBackground})`,
                    backgroundSize: 'cover'}}>
                            
                    <NavigationList name='header' />
                    <Title description={description}/>
                    <Divider color="white" />
                </div>
            </div>
        </>   
    )
}