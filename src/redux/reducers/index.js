import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createForms } from 'react-redux-form';

import items from './items/items';
import filter, * as fromItems from './items/itemFilter';
import profile from './profile';

const initialProfile = {
  gender: '',
  upper: '',
  fit: '',
  brands: ''
};

const app = combineReducers({
  items,
  filter,
  profile,
  ...createForms({
    profile: initialProfile,
  }),
  routing: routerReducer
});

export default app;

export const getFilteredItems = (state, filter) =>
  fromItems.getFilteredItems(state, filter);
