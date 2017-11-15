import React from 'react';
//import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { configure, history } from './configureStore';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';

// import components
import App from './containers/App';
//import Single from './components/Single';
//import Grid from './components/Grid';

// import react router deps
//import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const store = configure();

console.log("store: ", typeof store);
console.log("history: ", typeof history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
/*
if (module.hot) {
    module.hot.accept('./containers/App', () => {
        const NextApp = require('./containers/App').default;
        ReactDOM.render(
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <NextApp />
                </ConnectedRouter>
            </Provider>,
            document.getElementById('root')
        );
    });
    window.store = store;
}
*/
registerServiceWorker();
/*
const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
*/