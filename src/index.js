import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './modules/configureStore';
import registerServiceWorker from './modules/registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './containers/App';
import './index.css';
import 'typeface-roboto';

const theme = createMuiTheme();

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={theme}>
          <App>
            <div></div>
          </App>
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();

registerServiceWorker();
