import { CoffeeItems } from '../CoffeeItems/CoffeeItems';
import './OurBest.css';

export const OurBest = ({data}) => {

  const elements = data.map(item => { 
    const {id, ...itemProps } = item;
    if (item.best) {
      return <CoffeeItems key={id} {...itemProps} />  
    }
  })
  return (
    <section className="our_best">
      <div className="our_best_container">
        <h2>Our Best</h2>
        <div className='items_wrapper'>
          <ul className="coffee_items">
            {elements}
          </ul>
        </div>
      </div>
    </section>
  )
  }

