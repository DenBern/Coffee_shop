import { AboutUs } from '../../pages/CoffeeHouse/AboutUs/AboutUs';

import './AboutSection.css';

export const AboutContent = ({name}) => {
  if (name === 'coffee_house') {
    return (
      <AboutUs description='coffee_house' title='About us' />
    )
  }

  if (name === 'Our coffee') {
    return (
      <AboutOurBeans description='our_coffee' title='About our beans' />
    )
  }
}
  
