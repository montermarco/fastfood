import React, { Component } from 'react';
import MenuItem from './MenuItem';

class Menu extends Component {
    render() {
        
        return (
            <div>
                    <h2>The dishes!</h2>
                    <ul>
                        {Object.keys(this.props.menuItems).map(item => (
                            <MenuItem info={this.props.menuItems[item]}
                            key={item}
                            />
                        ))}
                    </ul>
            </div>
        );
    }
}

export default Menu;