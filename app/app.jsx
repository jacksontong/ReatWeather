import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from './components/Main.jsx';
import Weather from './components/Weather.jsx';
import About from './components/About.jsx';
import Examples from './components/Examples.jsx';
// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

ReactDOM.render(<h1>Boilerplate app!</h1>, document.getElementById('app'));