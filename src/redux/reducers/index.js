import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import items from './items/items';
import profile from './profile';
import search from './search';

const app = combineReducers({
  items,
  profile,
  search,
  routing: routerReducer
});

export default app;