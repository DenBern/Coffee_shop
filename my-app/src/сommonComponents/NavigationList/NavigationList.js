import { Link } from 'react-router-dom';

import coffeeBeansWhite from '../../assets/png/coffee_beans_white.png';
import coffeeBeansBlack from '../../assets/png/coffee_beans_black.png';

import './NavigationList.css';

export const NavigationList = ({name, activePage}) => {
  return (
    <div className={`${name}_navigation`}>
        <nav>
          <div className="navigation_logo"
            style={{backgroundImage: `url(${name === 'header' ? coffeeBeansWhite : coffeeBeansBlack})`}}>
          </div>
          <ul className="navigation">
                <li 
                  className="navigation_item" 
                  onClick={() => activePage()}>
                  <Link to="/coffeehouse">Coffee house</Link>
                </li>
                <li 
                  className="navigation_item"
                  onClick={() => activePage()}>
                  <Link to="/ourcoffee">Our coffee</Link>
                </li>
                <li className="navigation_item">
                  <a href="#">For your pleasure</a>
                </li>
          </ul>
        </nav>
      </div>
  )
}