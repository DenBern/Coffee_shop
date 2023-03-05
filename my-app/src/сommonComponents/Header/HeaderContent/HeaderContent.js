import { Divider } from "../../Divider/Divider";
import { PAGES_DESCRIPTION } from "../../../constants/constants";
import { COLORS } from "../../../constants/constants";

import './HeaderContent.css';

export const HeaderContent = ({description}) => {
  if (description === PAGES_DESCRIPTION.MAIN) {
    return (
      <div className="header_description">
        <h1>Everything You Love About Coffee</h1>
        <Divider color={COLORS.WHITE} />
        <div className="header_description_text">
          <p>We makes every day full of energy and taste</p>
          <p>Want to try our beans?</p>
        </div>
        <button className="header_description_button" type="button">More</button>
      </div>
    )
  } else {
    return (
      <div className="header_description_empty">
        <h1>Our coffee</h1>
      </div>
    )
  }
}