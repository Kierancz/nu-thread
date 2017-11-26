import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import items, * as fromItems from './items/items';
import filter from './items/itemFilter';

const app = combineReducers({
  items,
  filter,
  routing: routerReducer
});

export default app;

export const getFilteredItems = (state, filter) =>
  fromItems.getFilteredItems(state, filter);