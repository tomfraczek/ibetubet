import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import LandingPage from '../pages/LandingPage';
import RacePage from '../pages/RacePage';
import { RouteUrl } from './routesUrl';

export const AppRoutes = () => (
    <Router>
        <Header />
        <Switch>
            <Route path={RouteUrl.home} exact component={LandingPage} />
            <Route path={RouteUrl.race} exact component={RacePage} />
            <Redirect to={RouteUrl.home} />
        </Switch>
    </Router>
);
