import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from '../../modules/configureStore';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>, 
    div
  );
});


