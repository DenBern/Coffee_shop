import whiteDividerBeans from '../assets/png/coffee_beans_white_fill.png';
import blackDividerBeans from '../assets/png/coffee_beans_black_fill.png';

export const getDivider = ({color}) => {
  switch (color) {
    case 'white':
      return (
        <div className="coffee_lines">
          <div>
            <hr className="two_hr"></hr>
          </div>
          <div 
          className="divider_beans"
          style={{backgroundImage: `url(${whiteDividerBeans})`}}>
          </div>
          <div>
            <hr className="two_hr"></hr>
          </div>
        </div>
      )
    case 'black':
      return (
        <div className="coffee_lines">
          <div>
            <hr className="two_hr"></hr>
          </div>
          <div 
          className="divider_beans"
          style={{backgroundImage: `url(${blackDividerBeans})`}}>
          </div>
          <div>
            <hr className="two_hr"></hr>
          </div>
        </div>
      )
    default: 
        console.log('err')
  }
} 