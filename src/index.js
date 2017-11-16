import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './modules/configureStore';
import registerServiceWorker from './modules/registerServiceWorker';

import './index.css';
import 'typeface-roboto';

// import components
import App from './containers/App';
//import Single from './components/Single';
//import Grid from './components/Grid';

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App><div></div></App>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
