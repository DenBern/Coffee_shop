import './Title.css';

const mainPage = "Coffee house";

export const Title = ({description}) => {
  if (description === mainPage) {
     return <h1>Everything You Love About Coffee</h1>
  } else {
     return  <h1>Our Coffee</h1>
  }
}
    

