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

const dark = {
  palette: {
    type: 'light',
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#003EFF',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contast with palette.primary.main
    },
    // secondary: {
    //   // light: '#0066ff',
    //   // main: '#0044ff',
    //   // dark: will be calculated from palette.secondary.main,
    //   // contrastText: '#ffcc00',
    // },
  },
  overrides: {
    MuiCard: {
      root: {
        borderRadius: 6
      }
    },
    MuiMenu: {
      paper: {
        borderRadius: 6
      }
    },
    MuiDialog: {
      paper: {
        borderRadius: 6
      }
    },
    MuiButton: {
      root: {
        // background: 'linear-gradient(45deg, #00FF9B 30%, #003EFF 90%)',
        borderRadius: 6,
        border: 0,
        // color: 'white',
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
      },
    },
  },
};
const theme = createMuiTheme(dark);

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
