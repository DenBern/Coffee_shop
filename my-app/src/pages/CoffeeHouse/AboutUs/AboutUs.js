import { Divider } from "../../../сommonComponents/Divider/Divider";
import { Description } from "./Description/Description";
import { PAGES_DESCRIPTION } from "../../../constants/constants";

import './AboutUs.css';

export const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us_wrapper">
        <div className="about-us_content">
          <h2>About Us</h2>
          <Divider />
        </div>
        <Description description={PAGES_DESCRIPTION.MAIN} />
      </div>
    </section>
  )
}