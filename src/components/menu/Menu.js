import React, { Component } from 'react';
import Search from '../site/Search';
import Rater from '../site/Rater'
import { Row, List, Card, Divider, Icon } from 'antd';
import { Link } from 'react-router-dom';


const { Meta } = Card;

class Menu extends Component {
    render() {
        
        return (
            <div>
                <div className="times">
                    <h1 className="hometxt">Tu comida en 3 tiempos!</h1>
                    <ul className="txt">
                        <li>Selecciona un platillo</li>
                        <li>Escoge tu sucursal</li>
                        <li>Recoge tu orden</li>
                    </ul>   
                </div>

                <Divider>Explora nuestros platillos...</Divider>    

                <Row type="flex" justify="space-around">    
                    <div className="filters">
                        <Search search={this.props.searcher}/>
                        <Rater />
                    </div>    
                </Row>
                
                    <List
                        grid={{
                        xs: 1, sm: 1, md: 3, lg: 3, xl: 4, xxl: 4,
                        }}
                        dataSource={this.props.menuItems}
                        renderItem={item => (
                            
                            <List.Item>
                                <Row type="flex" justify="space-around" >
                                    <Card
                                        style={{ width: 300 }}
                                        cover={
                                            <img src={`imgs/${item.image}.jpg`} alt={item.dish} />
                                        }
                                        actions={[<p>$ {item.price}</p>, <Link to={`/menuItem/${item.id}`}><h4 className="button">Ordenar</h4></Link>]}
                                    >
                                        <Meta
                                            title={item.dish}
                                            description={item.description}
                                        />
                                        
                                        <span><Icon type="star" theme="twoTone" twoToneColor="#F6DC3F"/> {item.rate}</span>
                                        
                                    </Card>
                                </Row>
                            </List.Item>
                            
                        )}
                    />
            </div>
        );
    }
}

export default Menu;
