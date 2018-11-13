import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from '../App'
import SingleMovie from './SingleMovie'
import Error from './Error'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/movie/:id" component={SingleMovie}/>
            <Route component={Error} />
        </Switch>
    </BrowserRouter>
);

export default Router;