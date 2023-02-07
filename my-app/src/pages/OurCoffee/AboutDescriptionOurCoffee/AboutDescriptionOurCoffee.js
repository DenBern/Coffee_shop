import { TitleDividerDescription } from "../../../сommonComponents/TitleDividerDescription/TitleDividerDescription";
import { Line } from '../../../сommonComponents/Line/Line';

import aboutOurBeans from '../../../assets/png/about_our_beans.png';

export const AboutDescriptionOurCoffee = ({description, title}) => {
  return (
    <section className={`about_us_${description}`}>
      <div className="image_divider_wrapper">
        <div className="about_our_beans" 
          style={{backgroundImage: `url(${aboutOurBeans})`}}>
        </div>
        <TitleDividerDescription title={title} />
      </div>
      <Line />
    </section>
  )
}