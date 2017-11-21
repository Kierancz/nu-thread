import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import items from './items/items';
import filter from './items/itemFilter';

export default combineReducers({
  items,
  filter,
  routing: routerReducer
})