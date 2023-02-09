import whiteDividerBeans from '../../assets/png/coffee_beans_white_fill.png'
import blackDividerBeans from '../../assets/png/coffee_beans_black_fill.png';

import  './Divider.css';



export const Divider = ({color}) => {
  return (
    <div className="divider">
          <div>
            <hr className="divider-line-hr"></hr>
          </div>
          <div 
            className="divider-logo"
            style={{backgroundImage: `url(${color === 'white' ? whiteDividerBeans : blackDividerBeans})`}}>
          </div>
          <div>
            <hr className="divider-line-hr"></hr>
          </div>
    </div>
  )
}

