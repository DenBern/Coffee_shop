import { TitleDividerDescription } from "../../TitleDividerDescription/TitleDividerDescription"

export const AboutDescriptionCoffeeHouse = ({description, title}) => {
  return (
    <section className={`about_us_${description}`}>
      <TitleDividerDescription title={title} />
    </section>
  )
}