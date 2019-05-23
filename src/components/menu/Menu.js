import React, { Component } from 'react';
import Search from '../site/Search';
import { Row, List, Card, Col } from 'antd';
import { Link } from 'react-router-dom';


const { Meta } = Card;

class Menu extends Component {
    render() {
        
        return (
            <div className="menu">
                <Row type="flex" justify="space-around">
                    <h2>Explora nuestros platillos...</h2>                    
                    <Search search={this.props.searcher}/>
                </Row>

                <div >
                    <List
                        grid={{
                        xs: 1, sm: 1, md: 3, lg: 3, xl: 4, xxl: 4,
                        }}
                        dataSource={this.props.menuItems}
                        renderItem={item => (
                            
                            <List.Item>
                                <Card
                                    style={{ width: 300 }}
                                    cover={
                                        <img src={`imgs/${item.image}.jpg`} alt={item.dish} />
                                    }
                                    actions={[ <p>{item.rate}</p>, <p>$ {item.price}</p>, <Link to={`/menuItem/${item.id}`}><h4>Ordenar</h4></Link>]}
                                >
                                    <Meta
                                        title={item.dish}
                                        description={item.description}
                                    />
                                </Card>
                            </List.Item>
                        )}
                    />
                </div>

            </div>
        );
    }
}

export default Menu;
