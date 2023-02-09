import { Product } from "./Product/Product";
import { ControlPanel } from "../ControlPanel/ControlPanel"

import './CatalogProducts.css';

export const CatalogProducts = ({data}) => {
  const elements = data.map(item => {
    const {id, ...itemProps } = item;
    if(item) {
      return <Product key={id} {...itemProps} />
    }
  })
  return (
    <section className="catalog-products_wrapper">
        <ul className="catalog-products">
          {elements}
        </ul>
    </section>
  )
}