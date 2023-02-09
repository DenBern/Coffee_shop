import { CatalogItem } from "../CatalogItem/CatalogItem"
import { ControlPanel } from "../SearchFilterSection/ControlPanel/ControlPanel";

import './SearchFilterSection.css';

export const SearchFilterSection = ({data}) => {
  const elements = data.map(item => {
    const {id, ...itemProps } = item;
    if(item) {
      return <CatalogItem key={id} {...itemProps} />
    }
  })
  return (
    <section className="catalog-products_wrapper">
      <ControlPanel data={data}/>
        <ul className="catalog-products">
          {elements}
        </ul>
    </section>
  )
}