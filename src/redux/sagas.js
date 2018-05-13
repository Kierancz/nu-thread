import { fetchItems } from '../modules/ebay';
import {
  REQUEST_ITEMS,
  REQUEST_ITEM_PAGE,
  requestItems,
  receiveItems,
  receivePageItems
} from './actions/items';
import { ADD_PROFILE } from './actions/profile';
import { getProfile } from './reducers/profile';
import { getQuery } from './reducers/items/items';
import { call, put, takeEvery, all, select } from 'redux-saga/effects';

export function* getItems(action) {
  try {
    // select query info from state
    const profile = yield select(getProfile);
    const query = action.query || (yield select(getQuery));
    const pageNum = 1;

    const data = yield call(fetchItems, profile, query, pageNum);
    const items = data.searchResult[0].item;
    const lastPage = data.paginationOutput[0].totalPages[0];
    yield put(receiveItems(items, lastPage));
  } 
  catch (e) {
    console.log('error in getItems(): ', e);
  }
}
export function* getPageItems(action) {
  try {
    // select query info from state
    const profile = yield select(getProfile);
    const query = yield select(getQuery);
    const pageNum = action.nextPage || 2;

    const data = yield call(fetchItems, profile, query, pageNum);
    const items = data.searchResult[0].item;

    yield put(receivePageItems(action.nextPage, items));
  } 
  catch (e) {
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
