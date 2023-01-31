import { CoffeeItems } from '../CoffeeItems/CoffeeItems';
import './OurBest.css';

export const OurBest = ({data}) => {

  const elements = data.map(item => {
    const {best, ...itemProps } = item;
    return <CoffeeItems key={best} {...itemProps} />  
  })
  return (
    <section className="our_best">
      <h2>Our Best</h2>
      <div className='items_wrapper'>
        <ul className="coffee_items">
          {elements}
        </ul>
      </div>
    </section>
  )
  }

