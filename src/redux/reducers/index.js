import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createForms } from 'react-redux-form';

import items, * as fromItems from './items/items';
import filter from './items/itemFilter';
//import profile from './profile';

const initialProfile = {
  gender: '',
  upper: '',
  fit: '',
};

const app = combineReducers({
  items,
  filter,
  ...createForms({
    profile: initialProfile,
  }),
  routing: routerReducer
});

export default app;

export const getFilteredItems = (state, filter) =>
  fromItems.getFilteredItems(state, filter);