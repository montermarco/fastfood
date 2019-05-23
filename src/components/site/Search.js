import React, { Component } from 'react';

class Search extends Component {

    readSearch = e => {
        const str = e.target.value;
        this.props.search(str);
    }

    render() {
        return (
            <div>
                <form action="">
                    <input type="text" placeholder="Busca un platillo" onChange={this.readSearch}/>
                    
                </form>
            </div>
        );
    }
}

export default Search;