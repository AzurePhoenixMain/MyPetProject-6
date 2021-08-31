import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';

import Background from './food-bg.jpg';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

const App = ({items}) => {
    let total = 0
    items.map(item => total = total + item.price*item.counter)

    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={total}/>
            <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route path='/cart'  component={CartPage}/>
                <Route  exact component={MainPage}/>
            </Switch>
        </div>
    )
}

const mapStateToProps = ({items}) => {
    return {
        items
    } 
}

export default connect(mapStateToProps)(App);