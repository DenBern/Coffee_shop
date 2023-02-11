import { Title } from '../../../сommonComponents/Title/Title';
import BestProduct from '../BestProduct/BestProduct'
import './OurBest.css';

export const OurBest = ({data}) => {
  const elements = data.map(item => { 
    const {id, ...itemProps } = item;
    if (item.best) {
      return <BestProduct key={id} {...itemProps} />  
    }
  })
  return (
    <section className="our_best">
      <div className="our_best_content">
        <Title title='Our Best' />
        <div className='best-items_wrapper'>
          <ul className="best-items">
            {elements}
          </ul>
        </div>
      </div>
    </section>
  )
}

