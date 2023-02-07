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
          className = {`btn ${clazz}`}
          type = "button"
          key={name}>
        </button>
      )
    })
  
    return ( 
      <div className = "wrapper_buttons">
        {buttons}
      </div>
    );
  }