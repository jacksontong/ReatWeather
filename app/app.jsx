import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from './components/Main.jsx';
import Weather from './components/Weather.jsx';
import About from './components/About.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>, 
  document.getElementById('app')
);