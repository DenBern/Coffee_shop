import { FilterButtons } from "./FilterButtons/FilterButtons";
import Search from "./Search/Search";

import './ControlPanel.css';

export const ControlPanel = ({onUpdateSearch, filter, onFilterSelect}) => {
  return (
    <section className="controls-panel_wrapper">
      <Search onUpdateSearch={onUpdateSearch}/>
      <FilterButtons 
        filter={filter} 
        onFilterSelect={onFilterSelect} 
      />
    </section>
  )
}