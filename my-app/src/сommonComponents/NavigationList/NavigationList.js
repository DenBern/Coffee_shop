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
                <li 
                  className="navigation_item">
                  <Link 
                    to="/coffeehouse">Coffee house
                  </Link>
                </li>
                <li 
                  className="navigation_item">
                  <Link 
                    to="/ourcoffee">Our coffee
                  </Link>
                </li>
                <li className="navigation_item">
                  <Link 
                    to="#">For your pleasure
                  </Link>
                </li>
          </ul>
        </nav>
      </div>
  )
}