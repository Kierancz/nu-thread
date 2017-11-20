import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './modules/configureStore';
import registerServiceWorker from './modules/registerServiceWorker';

import './index.css';
import 'typeface-roboto';

// import components
import App from './containers/App';

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App {...store.getState()}>
          <div></div>
        </App>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();

registerServiceWorker();
