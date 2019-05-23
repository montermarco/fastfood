import React from 'react';
import { PageHeader, Statistic, Row, Col } from 'antd';


const Item = (props) => {
    const { dish, description, price, image} = props.items;

    const Description = ({ term, children, span = 12 }) => (
        <Col span={span}>
          <div className="description">
            <div className="term">{term}</div>
            <div className="detail">{children}</div>
          </div>
        </Col>
      );
      
      const content = (
        <Row>
          <Description term="Cantidad:"> 1 </Description>
          <Description term="Sucursal:"></Description>
          <Description term="Descripción:" span={24}>
            {description}
          </Description>
        </Row>
      );
      
      const extraContent = (
        <Row>
          <Col span={12}>
            <Statistic title="Status" value="Pendiente" />
          </Col>
          <Col span={12}>
            <Statistic title="precio" prefix="$" value={price} />
          </Col>
        </Row>
      );

    return (
        <div>        
        <PageHeader
                onBack={() => window.history.back()}
                title={dish}
            >
                <div className="wrap">
                    <div className="content padding">{content}</div>
                    <div className="extraContent">{extraContent}</div>
                </div>
        </PageHeader>
        </div>
    );
};

export default Item;