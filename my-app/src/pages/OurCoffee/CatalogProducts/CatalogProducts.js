import { Product } from "./Product/Product";

import './CatalogProducts.css';

export const CatalogProducts = ({products}) => {
  const elements = products.map(item => {
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