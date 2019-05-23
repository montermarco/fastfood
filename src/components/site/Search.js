import React, { Component } from 'react';
import { Input } from 'antd';

const SearchBar = Input.Search;

class Search extends Component {

    readSearch = e => {
        const str = e.target.value;
        this.props.search(str);
    }

    render() {
        return (
            <div>
                <SearchBar
                placeholder="Busca un platillo"
                onChange={this.readSearch}
                style={{ width: 400 }}
                />
            </div>
        );
    }
}

export default Search;