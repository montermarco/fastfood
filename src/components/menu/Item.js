import React from 'react';
import { PageHeader, Statistic, Row, Col, Modal, Button } from 'antd';
import Location from '../site/Location';

const Item = (props) => {

    const { dish, description, price} = props.items;

    
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
          <Description term="Descripción:" span={24}>{description}</Description>
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

    const success = () => {
      Modal.success({
        title: 'Recibimos tu orden!',
        content: 'Tu orden estará lista en 40 min...',
      });
    }  

    return (
        <div>
          <h2>Selecciona una sucursal</h2>
           
          <Location location={props.pickLocation}/>     
        
          <PageHeader
                  onBack={() => window.history.back()}
                  title={dish}>
                  <div className="wrap">
                      <div className="content padding">{content}</div>
                      <div className="extraContent">{extraContent}</div>
                  </div>
          </PageHeader>
          <Row type="flex" justify="center"> 
          <Button className="button" onClick={success}>Confirmar orden</Button>

          </Row>  
        </div>
    );
};

export default Item;