import React from 'react';

const Product = (props) => {
    
    const {image, dish, price, description, rate} = props.info;
    return (
        <li>
        <img src={`imgs/${image}.jpg`} alt={dish} />
        <p>{price}</p>
        <p>{description}</p>
        <p>{rate}</p>
        </li>
    );
};

export default Product;