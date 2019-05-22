import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import menu from '../data/menu.json'
import Header from './Header';
import Menu from '../menu/Menu';
import Item from '../menu/Item';

class Router extends Component {

    state = {
        menuItems: []
    }

    componentWillMount(){
        this.setState({
            menuItems: menu
        })
    }

    render() {
        return (
            
                <BrowserRouter>

                    <Header/>



                    <Switch>
                        <Route exact path="/" render={() => (
                            <Menu menuItems={this.state.menuItems}/>
                        )}/>


                        <Route exact path="/menuItem/:id" render={(props) => {
                            let itemId = props.location.pathname.replace('/menuItem/', '');
                            return (
                                <Item items={this.state.menuItems[itemId]}/>
                            )
                            
                        }}/>

                    </Switch>
                </BrowserRouter>
            
        );
    }
}

export default Router;