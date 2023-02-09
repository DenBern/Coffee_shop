import { Divider } from "../../../сommonComponents/Divider/Divider";
import { Description } from "./Description/Description";
import { Title } from "../../../сommonComponents/Title/Title";

import './AboutUs.css';

export const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us_wrapper">
        <div className="about-us_content">
          <Title title="About Us" />
          <Divider />
        </div>
        <Description name="about-us"/>
      </div>
    </section>
  )
}