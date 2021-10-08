import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import LandingPage from '../pages/LandingPage';
import { RouteUrl } from './routesUrl';

export const AppRoutes = () => (
    <Router>
        <Header />
        <Switch>
            <Route path={RouteUrl.home} exact component={LandingPage} />
            <Redirect to={RouteUrl.home} />
        </Switch>
    </Router>
);
