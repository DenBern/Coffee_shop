import { FilterButtons } from "./FilterButtons/FilterButtons";
import { Search } from "./Search/Search"

import './ControlPanel.css';

export const ControlPanel = ({data}) => {
  return (
    <section className="controls-panel_wrapper">
      <Search />
      <FilterButtons data={data}/>
    </section>
  )
}