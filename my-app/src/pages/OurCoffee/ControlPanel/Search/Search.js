import { Component } from 'react'
import './Search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    onUpdateSearch = (e) => {
        const search = e.target.value;
        this.setState({search: search});
        this.props.onUpdateSearch(search)
    }

    render () {
        return (
            <div className="search_wrapper">
                <p className="search-text">Loooking for</p>
                <input 
                    type='text'
                    className="search-input"
                    placeholder="start typing here..."
                    value={this.state.search}
                    onChange={this.onUpdateSearch}
                />
            </div>
        )
    }
}

export default Search;