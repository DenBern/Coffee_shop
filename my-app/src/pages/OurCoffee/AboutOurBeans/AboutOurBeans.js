import { Title} from "../../../сommonComponents/Title/Title";
import { Line } from '../../../сommonComponents/Line/Line';
import { Description } from "../../CoffeeHouse/AboutUs/Description/Description";
import { Divider } from "../../../сommonComponents/Divider/Divider";

import aboutOurBeans from '../../../assets/png/about_our_beans.png';

export const AboutOurBeans = ({description, title}) => {
  return (
    <section className={`about_us_${description}`}>
      <div className="image_divider_wrapper">
        <div className="about_our_beans" 
          style={{backgroundImage: `url(${aboutOurBeans})`}}>
        </div>
        <Title title={title} />
        <Divider color='white'/>
        <Description />
      </div>
      <Line />
    </section>
  )
}