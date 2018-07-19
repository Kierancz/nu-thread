import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import items from './items';
import profile from './profile';
import search from './search';
import auth from './auth';

const app = combineReducers({
  items,
  profile,
  search,
  auth,
  routing: routerReducer
});

export default app;