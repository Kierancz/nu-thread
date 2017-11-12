import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';

// import components
import App from './App';
import Single from './components/Single';
import Grid from './components/Grid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(<App><div/></App>, document.getElementById('root'));
registerServiceWorker();
