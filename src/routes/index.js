import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Landing from '~/pages/Landing';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Profile from '~/pages/Profile';
import Dashboard from '~/pages/Dashboard';

import Route from './Route';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/sesion" component={SignIn} />
        <Route path="/registrarse" component={SignUp} />
        <Route path="/perfil" component={Profile} isPrivate />
        <Route path="/admin" component={Dashboard} isPrivate />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
