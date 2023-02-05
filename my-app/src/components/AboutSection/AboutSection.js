import { AboutDescriptionOurCoffee } from '../PageOurCoffee/AboutDescriptionOurCoffee/AboutDescriptionOurCoffee';
import { AboutDescriptionCoffeeHouse } from '../PageCoffeeHouse/AboutDescriptionCoffeeHouse/AboutDescriptionCoffeeHouse';

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
  
