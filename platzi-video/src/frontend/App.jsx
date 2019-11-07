import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signin from './pages/Signin';
import Player from './pages/Player';
import NotFound from './pages/NotFound';

import './assets/scss/styes.scss';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/player/:id' component={Player} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
