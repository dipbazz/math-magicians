import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/calculator" component={Calculator} />
      <Route path="/quote" component={Quote} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
