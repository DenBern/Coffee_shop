import { CatalogItem } from "../CatalogItem/CatalogItem";
import { SearchFilter } from "./SearchFilter/SearchFilter"

import './SearchFilterSection.css';

export const SearchFilterSection = ({data}) => {
  const elements = data.map(item => {
    const {id, ...itemProps } = item;
    if(item) {
      return <CatalogItem key={id} {...itemProps} />
    }
  })
  return (
    <div className="wrapper_search_filter_items">
      <SearchFilter data={data}/>
      <div className="wrapper_coffee_items">
        <ul className="filter_coffee_items">
          {elements}
        </ul>
      </div>
    </div>
  )
}