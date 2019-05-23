import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const MenuItem = (props) => {
    
    const {image, dish, price, description, rate} = props.info;

    return (

        <Card
    style={{ width: 300 }}
    cover={
        <img src={`imgs/${image}.jpg`} alt={dish} />
    }
    actions={[ <p>{rate}</p>, <p>{price}</p>]}
  >
    <Meta
      title={dish}
      description={description}
    />
  </Card>

    );
};

export default MenuItem;