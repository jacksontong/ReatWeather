import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from './components/Main.jsx';
import Weather from './components/Weather.jsx';
import About from './components/About.jsx';
import Examples from './components/Examples.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>, 
  document.getElementById('app')
);