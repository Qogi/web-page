import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Products from './products';
import Home from './home';
import Contact from './contact';
import About from './about';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/contact" component={Contact} />
    </Switch>
)

export default Main;