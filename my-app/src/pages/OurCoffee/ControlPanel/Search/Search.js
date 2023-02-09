import './Search.css';

export const Search = () => {
    return (
        <div className="search_wrapper">
            <p className="search-text">Loooking for</p>
            <input 
                type='text'
                className="search-input"
                placeholder="start typing here..."
                //onChange={}
            />
        </div>
    )
}