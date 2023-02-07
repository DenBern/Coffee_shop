import whiteDividerBeans from '../../assets/png/coffee_beans_white_fill.png'
import blackDividerBeans from '../../assets/png/coffee_beans_black_fill.png';

import  './Divider.css';

const colorDivider = {
  white: whiteDividerBeans,
  black: blackDividerBeans,
};

export const Divider = (color) => {
  return (
    <div className='divider_wrapper'>
      <div className="coffee_lines">
          <div>
            <hr className="two_hr"></hr>
          </div>
          <div 
          className="divider_beans"
          style={{backgroundImage: `url(${color === 'white' ? colorDivider.white : colorDivider.black})`}}>
          </div>
          <div>
            <hr className="two_hr"></hr>
          </div>
        </div>
    </div>
  )
}

