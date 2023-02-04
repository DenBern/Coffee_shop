import coffeeBeansWhite from '../assets/png/coffee_beans_white.png';
import coffeeBeansBlack from '../assets/png/coffee_beans_black.png'

export const getNavigation = (name) => {
  switch (name) {
    case 'header':
      return (
        <div className="beans_logo"
          style={{backgroundImage: `url(${coffeeBeansWhite})`}}>
        </div>
      );
    case 'footer':
      return (
        <div className="beans_logo"
          style={{backgroundImage: `url(${coffeeBeansBlack})`}}>
        </div>
      );
    default:
      return (
        <div className="empty">
          "No LOGO"
        </div>
      )
  }
}
