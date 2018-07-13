import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './modules/configureStore';
import registerServiceWorker from './modules/registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './containers/App';
import { firebase } from './modules/firebase/fire';
import './index.css';
import 'typeface-roboto';
import { dark } from './modules/theme';

const theme = createMuiTheme(dark);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
registerServiceWorker();

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    console.log('login');
  } else {
    console.log('logout');
  }
})
