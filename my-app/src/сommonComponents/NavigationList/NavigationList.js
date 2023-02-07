import {getNavigation} from '../../helpers/getNavigation';

import './NavigationList.css';
export const NavigationList = ({name}) => {
  return (
    <div className={`navigation_${name}`}>
          {getNavigation(name)}
        <nav>
            <ul className="items">
                <li className="item_li">
                  <a href="https://www.google.com/">Coffee house</a>
                </li>
                <li className="item_li">
                  <a href="https://www.google.com/">Our coffee</a>
                </li>
                <li className="item_li">
                  <a href="https://www.google.com/">For your pleasure</a>
                </li>
            </ul>
        </nav>
      </div>
  )
}