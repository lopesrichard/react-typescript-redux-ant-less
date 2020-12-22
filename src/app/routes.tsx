import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from 'features/login';
import { Template } from 'components/template';
import { Home } from 'features/home';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/:account" component={Template} />
      </Switch>
    </BrowserRouter>
  );
};

export const Pages = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
};
