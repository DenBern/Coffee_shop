import { Line } from '../../../сommonComponents/Line/Line';
import { Description } from "../../CoffeeHouse/AboutUs/Description/Description";
import { Divider } from "../../../сommonComponents/Divider/Divider";
import { PAGES_DESCRIPTION } from '../../../constants/constants';

import './AboutOurBeans.css';

import aboutOurBeans from '../../../assets/png/about_our_beans.png';

export const AboutOurBeans = ({section}) => {
  return (
    <section className={`${section}_wrapper`}>
      <div className="hello">
        <div className={`${section}_image`}
          style={{backgroundImage: `url(${aboutOurBeans})`}}>
        </div>
        <div className={`${section}_content`}>
          <h2>About our beans</h2>
          <Divider color='black'/>
          <Description description={PAGES_DESCRIPTION.OUR}/>
        </div>
      </div>
      <Line />
    </section>
  )
}
