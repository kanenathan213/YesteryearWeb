import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect } from 'react-router';
import { createHistory } from 'history';

import App from './components/App';
import Index from './components/Index';
import TourDetail from './components/TourDetail';
import ToursList from './components/ToursList';
import Account from './components/Account';
import Connect from './components/Connect';
import SingleTour from './components/SingleTour';
import SubmitTour from './components/SubmitTour';

/*
  Routes
*/

function requireAuth(nextState, replaceState) {
  if (!auth.loggedIn())
    replaceState({ nextPathname: nextState.location.pathname }, '/connect')
}

const routes = (
  <Router history={createHistory()}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="tours" component={ToursList} />
      <Route path="tours/:tourID" component={TourDetail} />
      <Route path="connect" component={Connect} />
      <Route path="account" component={Account} />
      <Route path="angkor" component={SingleTour} />
      <Route path="submit" component={SubmitTour} />
      <IndexRedirect to="angkor" component={SingleTour} />
    </Route>
  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));
