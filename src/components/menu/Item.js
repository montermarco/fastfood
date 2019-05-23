import React from 'react';

const Item = (props) => {
    
    console.log(props.items)
    const { dish} = props.items;

    return (
        <div>
            <p>Hello from Item</p>
            <h2>{dish}</h2>
        </div>
    );
};

export default Item;