import './FilterButtons.css'

export const FilterButtons = (props) => {

    const buttonsData = [
      {name: 'Brazil'},
      {name: 'Kenya'},
      {name: 'Columbia'}
    ];
  
    const buttons = buttonsData.map(({name}) => {
      const active = props.filter === name;
      const clazz = active ? 'btn-light' : 'btn-outline-light';
      return (
        <button 
          className = {`${clazz}`}
          type = "button"
          key={name}
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