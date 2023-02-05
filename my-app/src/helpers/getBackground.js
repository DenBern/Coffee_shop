import coffeeHeaderBackground from '../assets/png/coffee_house_background_header.png';
import coffeeOurCoffeeBackground from '../assets/png/coffee_our_background_header.png';

export const getBackground = (background) => {
  switch (background) {
    case 'coffee':
      return coffeeHeaderBackground;
    case 'our':
      return coffeeOurCoffeeBackground;
    default:
      console.log('Error')
  }
}
