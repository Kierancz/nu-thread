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
    let profile = yield select(getProfile);
    let gender = profile.gender? profile.gender : 'Men';
    let size = profile.upper? profile.upper : 'M';
    let keys = profile.brands? profile.brands : 'patagonia';

    console.log('getItems action: ', action);
    let pageNum = action.page? action.page : 1;
    const items = yield call(fetchItems, keys, gender, size, pageNum);

    if(!action.page) yield put(receiveItems(items));
    else yield put(receivePageItems(action.page, items));
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
  yield takeEvery(REQUEST_ITEM_PAGE, getItems);
}

export default function* rootSaga() {
  yield all([
    watchRequestItems(),
    watchAddProfile(),
    watchRequestItemPage()
  ]);
}
