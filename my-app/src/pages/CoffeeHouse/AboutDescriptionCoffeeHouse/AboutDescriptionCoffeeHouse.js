import { Title } from "../../../сommonComponents/Title/Title";
import { Divider } from "../../../сommonComponents/Divider/Divider";
import { Description } from "../../../сommonComponents/Description/Description";

export const AboutDescriptionCoffeeHouse = ({description, title}) => {
  return (
    <section className={`about_us_${description}`}>
        <div className="description_wrapper">
          <Divider />
          <Description />
      </div>
    </section>
  )
}