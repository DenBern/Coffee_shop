import { Divider } from "../сommonComponents/Divider/Divider";

export const getDescription = (description) => {
  switch (description) {
    case 'Coffee house':
      return (
        <div className="desctiption_header">
          <h1>Everything You Love About Coffee</h1>
          <Divider color='white' />
          <p className="">We makes every day full of energy and taste</p>
          <p className="">Want to try our beans?</p>
          <button className="button_more" type="button">More</button>
        </div>
      )
    case 'Our coffee':
      return (
        <div className="desctiption_header">
          <h1>Our Coffee</h1>
        </div>
      )
    default:
      console.log('Error')
  }
}
