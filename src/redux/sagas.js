import { fetchItems } from '../modules/ebay';
import {
  REQUEST_ITEMS,
  REQUEST_ITEM_PAGE,
  requestItems,
  receiveItems,
  receivePageItems } from './actions/items';
import { ADD_PROFILE } from './actions/profile';
import { getProfile } from './reducers/profile';
import { call, put, takeEvery, all, select } from 'redux-saga/effects';

export function* getItems(action) {
  try {
    // select current profile from state
    const profile = yield select(getProfile);
    const gender = profile.gender? profile.gender : 'Men';
    const size = profile.upper? profile.upper : 'M';
    const keys = profile.brands? profile.brands : 'patagonia';

    const pageNum = 1;
    const items = yield call(fetchItems, keys, gender, size, pageNum);

    yield put(receiveItems(items));
  } catch (e) {
    console.log('error in getItems(): ', e);
  }
}
export function* getPageItems(action) {
  try {
    // select current profile from state
    const profile = yield select(getProfile);
    const gender = profile.gender? profile.gender : 'Men';
    const size = profile.upper? profile.upper : 'M';
    const keys = profile.brands? profile.brands : 'patagonia';

    const pageNum = action.nextPage? action.nextPage : 2;
    const items = yield call(fetchItems, keys, gender, size, pageNum);

    yield put(receivePageItems(action.nextPage, items));
  } catch (e) {
    console.log('error in getItems(): ', e);
  }
}
export function* getProfileItems() {
  yield put(requestItems());
}

// Action Watchers
export function* watchRequestItems() {
  yield takeEvery(REQUEST_ITEMS, getItems);
}
export function* watchAddProfile() {
  yield takeEvery(ADD_PROFILE, getProfileItems);
}
export function* watchRequestItemPage() {
  yield takeEvery(REQUEST_ITEM_PAGE, getPageItems);
}

export default function* rootSaga() {
  yield all([
    watchRequestItems(),
    watchAddProfile(),
    watchRequestItemPage()
  ]);
}
