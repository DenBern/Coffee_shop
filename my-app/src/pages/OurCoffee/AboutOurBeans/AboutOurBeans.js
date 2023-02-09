import { Title} from "../../../сommonComponents/Title/Title";
import { Line } from '../../../сommonComponents/Line/Line';
import { Description } from "../../CoffeeHouse/AboutUs/Description/Description";
import { Divider } from "../../../сommonComponents/Divider/Divider";

import './AboutOurBeans.css';

import aboutOurBeans from '../../../assets/png/about_our_beans.png';

export const AboutOurBeans = ({title, section}) => {
  return (
    <section className={`${section}_wrapper`}>
      <div className="hello">
        <div className={`${section}_image`}
          style={{backgroundImage: `url(${aboutOurBeans})`}}>
        </div>
        <div className={`${section}_content`}>
          <Title title={title} />
          <Divider color='black'/>
          <Description name={section}/>
        </div>
      </div>
      <Line />
    </section>
  )
}
