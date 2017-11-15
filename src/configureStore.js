import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';


export const history = createHistory()
console.log("browser history: ", history);

const sagaMiddleware = createSagaMiddleware()

const initialState = {}
const enhancers = []
const middleware = [
  sagaMiddleware,
  routerMiddleware(history)
]

// Configure the logger middleware
const logger = createLogger({
  level: 'info',
  collapsed: true,
});
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
} else {
}
const createStoreWithMiddleware = compose(
  applyMiddleware(...middleware)(createStore)
);

export function configure(initialState) {
  console.log("in store config function...");
// Create the redux store and add middleware to it
  var configStore = createStoreWithMiddleware(
    rootReducer,
    initialState,
  )
// Snippet to allow hot reload to work with reducers
  if(module.hot) {
    module.hot.accept(function _() {
      configStore.replaceReducer(rootReducer);
    });
  }
  console.log("configStore: ", configStore);
return configStore;
};

/*
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';


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

export default store
*/