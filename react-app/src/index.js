import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Home from './sections/home/Home';

import Dev from './sections/dev/Dev';
import DevHome from './sections/dev/dev-home/DevHome';
import DevContact from './sections/dev/dev-contact/DevContact';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/dev" component={Dev}>
        <IndexRoute component={DevHome} />
        <Route path="/dev/contact" component={DevContact}></Route>
      </Route>
    </Route>
  </Router>
  , document.getElementById('root')
);

