import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
//import rootReducer from '../reducers';
import rootReducer from '../reducers/index';
import { createLogger } from 'redux-logger';

export const history = createHistory()

const sagaMiddleware = createSagaMiddleware()

const initialState = {}
const enhancers = []
const middleware = [
  sagaMiddleware,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}
// Configure the logger middleware
const logger = createLogger({
  level: 'info',
  collapsed: true,
});
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

// Extensions
store.runSaga = sagaMiddleware.run;
store.injectedReducers = {}; // Reducer registry
store.injectedSagas = {}; // Saga registry

// Snippet to allow hot reload to work with reducers
if(module.hot) {
  module.hot.accept(function _() {
    store.replaceReducer(rootReducer);
  });
}

export default store
