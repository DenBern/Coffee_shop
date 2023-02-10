import './FilterButtons.css'

export const FilterButtons = (props) => {

    const buttonsData = [
      {name: 'Brazil'},
      {name: 'Kenya'},
      {name: 'Columbia'},
      {name: 'Italy'},
      {name: 'Belgium'},
    ];
  
    const buttons = buttonsData.map(({name}) => {
      const active = props.filter === name;
      const clazz = active ? 'active' : 'disable';
      return (
        <button 
          className = {`btn ${clazz}`}
          type = "button"
          key={name}
          onClick={ () => props.onFilterSelect(name)}
          >{name}
        </button>
      )
    })
  
    return (
      <div className="filter-buttons_wrapper">
      <p className="filter-buttons-text">Or filter</p>
      <div className = "filter-buttons">
        {buttons}
      </div>
      </div>
    )
  }