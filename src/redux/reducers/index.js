import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
//import { createForms } from 'react-redux-form';
import items from './items/items';
import filter, * as fromItems from './items/itemFilter';
import profile from './profile';
import search from './search';

const app = combineReducers({
  items,
  filter,
  profile,
  search,
  routing: routerReducer
});

export default app;

export const getFilteredItems = (state, filter) =>
  fromItems.getFilteredItems(state, filter);
