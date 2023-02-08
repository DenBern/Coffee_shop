import { Title } from "../Title/Title";
import { Divider } from "../../Divider/Divider";

import './HeaderContent.css';

export const HeaderContent = ({description}) => {
  if (description === "Coffee house") {
    return (
      <div className="header_description">
        <Title description={description}/>
        <Divider color="white" />
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
        <Title description={description}/>
      </div>
    )
  }
}