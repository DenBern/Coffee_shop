import { FilterButtons } from '../FilterButtons/FilterButtons';

import './SearchFilter.css';

export const SearchFilter = ({data}) => {
  return (
    <div className="wrapper_search_buttons">
      <div className="wrapper_search">
        <p className="search">Loooking for</p>
        <input 
          type='text'
          className="search_input"
          placeholder="start typing here..."
          //onChange={}
          />
      </div>
      <div className="wrapper_filter">
        <p className="filter">Or filter</p>
        <FilterButtons data={data}/>
      </div>
    </div>
  )
}