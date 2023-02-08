import whiteDividerBeans from '../../assets/png/coffee_beans_white_fill.png'
import blackDividerBeans from '../../assets/png/coffee_beans_black_fill.png';

import  './Divider.css';



export const Divider = (color) => {
  return (
    <div className='divider_wrapper'>
      <div className="coffee_lines">
          <div>
            <hr className="two_hr"></hr>
          </div>
          <div 
          className="divider_beans"
          style={{backgroundImage: `url(${color === 'white' ? whiteDividerBeans : blackDividerBeans})`}}>
          </div>
          <div>
            <hr className="two_hr"></hr>
          </div>
        </div>
    </div>
  )
}

