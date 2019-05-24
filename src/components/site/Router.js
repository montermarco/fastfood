import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import menu from '../data/menu.json'
import Header from './Header';
import Footer from './Footer';
import Menu from '../menu/Menu';
import Item from '../menu/Item';

class Router extends Component {

    state = {
        menuItems: [],
        searchStr: '',
        rated: 0
    }

    componentWillMount(){
        this.setState({
            menuItems: menu
        })
    }

    searcher = (search) => {
        if(search.length > 1){
            this.setState({
                searchStr: search
            }) 
        } else {
            this.setState({
                searchStr: ''
            })
        }
    }

    ranking = (rank) => {
        this.setState({
            rated:rank
        })
    }

    render() {
        let items = [...this.state.menuItems];
        let search = this.state.searchStr;
        let result; 
        
        if(search !== ''){
            result = items.filter(item =>(
                item.description.toLowerCase().indexOf(search.toLowerCase()) !== -1                
            ))            
        } else {
            result = items;
        }

        return (   
                <BrowserRouter>

                    <Header/>

                    <Switch>
                        <Route exact path="/" render={() => (
                            <Menu menuItems={result}
                                searcher={this.searcher}
                                rankingFilter={this.ranking}/>
                        )}/>


                        <Route exact path="/menuItem/:id" render={(props) => {
                            let itemId = props.location.pathname.replace('/menuItem/', '');
                            return (
                                <Item items={this.state.menuItems[itemId]}/>
                            )
                            
                        }}/>

                    </Switch>
                    <Footer/>
                </BrowserRouter>
            
        );
    }
}

export default Router;