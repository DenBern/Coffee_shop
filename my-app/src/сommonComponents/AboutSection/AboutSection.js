import { AboutDescriptionCoffeeHouse } from '../../pages/CoffeeHouse/AboutDescriptionCoffeeHouse/AboutDescriptionCoffeeHouse';
import { AboutDescriptionOurCoffee } from '../../pages/OurCoffee/AboutDescriptionOurCoffee/AboutDescriptionOurCoffee';

import './AboutSection.css';

export const AboutSection = ({name}) => {
  if (name === 'Coffee house') {
    return (
      <AboutDescriptionCoffeeHouse description='coffee_house' title='About us' />
    )
  }

  if (name === 'Our coffee') {
    return (
      <AboutDescriptionOurCoffee description='our_coffee' title='About our beans' />
    )
  }
}
  
