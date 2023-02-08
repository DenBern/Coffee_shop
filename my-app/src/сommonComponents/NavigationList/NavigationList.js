import {getNavigation} from '../../helpers/getNavigation';

import './NavigationList.css';
export const NavigationList = ({name}) => {
  return (
    <div className={`${name}_navigation`}>
        <nav>
          {getNavigation(name)}
          <ul className="navigation">
                <li className="navigation_item">
                  <a href="https://www.google.com/">Coffee house</a>
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