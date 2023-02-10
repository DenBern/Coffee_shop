import { FilterButtons } from "./FilterButtons/FilterButtons";
import Search from "./Search/Search";

import './ControlPanel.css';

export const ControlPanel = ({data,onUpdateSearch}) => {
  return (
    <section className="controls-panel_wrapper">
      <Search onUpdateSearch={onUpdateSearch}/>
      <FilterButtons data={data}/>
    </section>
  )
}