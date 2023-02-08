import './Title.css';

export const Title = ({description}) => {
  if (description === 'Coffee house') {
     return <h1>Everything You Love About Coffee</h1>
  } else {
     return  <h1>Our Coffee</h1>
  }
}
    

