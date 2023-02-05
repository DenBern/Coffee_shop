import './SearchFilter.css';

export const SearchFilter = () => {
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
        <div className="wrapper_buttons">
          <button
            type="button" 
            className="filter_btn"
            >Brazil
          </button>
          <button
            type="button" 
            className="filter_btn"
            >Kenya
          </button>
          <button
            type="button" 
            className="filter_btn"
            >Columbia
          </button>
        </div>
      </div>
    </div>
  )
}