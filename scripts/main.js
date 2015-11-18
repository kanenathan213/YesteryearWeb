import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';

import App from './components/App';
import InitialView from './components/InitialView';

/*
  Routes
*/

var routes = (
  <Router history={createHistory()}>
    <Route path="/" component={InitialView}/>
    <Route path="/tours" component={App}/>
  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));
