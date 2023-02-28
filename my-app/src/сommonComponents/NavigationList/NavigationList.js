import { Link } from 'react-router-dom';

import coffeeBeansWhite from '../../assets/png/coffee_beans_white.png';
import coffeeBeansBlack from '../../assets/png/coffee_beans_black.png';

import './NavigationList.css';

export const NavigationList = ({name}) => {
  return (
    <div className={`${name}_navigation`}>
        <nav>
          <div className="navigation_logo"
            style={{backgroundImage: `url(${name === 'header' ? coffeeBeansWhite : coffeeBeansBlack})`}}>
          </div>
          <ul className="navigation">
                <li className="navigation_item">
                  <a href="/coffeehouse">Coffee house</a>
                </li>
                <li className="navigation_item">
                  <a href="https://www.google.com/">Our coffee</a>
                </li>
                <li className="navigation_item">
                  <a href="https://www.google.com/">For your pleasure</a>
                </li>
          </ul>
        </nav>
      </div>
  )
}