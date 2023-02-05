import { NavigationList } from '../NavigationList/NavigationList';
import { getBackground } from '../../helpers/getBackground';
import { getDescription } from '../../helpers/getDescription';

import './Header.css';

export const Header = ({background, description}) => {
    return (
        <div className="header_main">
            <div 
                className="background"
                style={{background: `url(${getBackground(background)})`,
                backgroundSize: 'cover'}}>
                <NavigationList name='header' />
                {getDescription(description)}
            </div>
        </div>   
    )
}