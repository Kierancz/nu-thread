import { fetchItems } from '../modules/ebay';
import {
  REQUEST_ITEMS,
  REQUEST_ITEM_PAGE,
  requestItems,
  receiveItems,
  receivePageItems
} from './actions/items';
import { ADD_PROFILE } from './actions/profile';
import { 
  ADD_QUERY, 
  ADD_CONFIG, 
  ADD_SORT_TYPE 
} from './actions/search';
import { getSortType } from './reducers/search';
import { getProfile } from './reducers/profile';
import { getQuery, getConfig } from './reducers/search';
import { call, put, takeEvery, all, select } from 'redux-saga/effects';

export function* getItems(action) {
  try {
    // select query info from state
    const profile = yield select(getProfile);
    const query = yield select(getQuery);
    const config = yield select(getConfig);
    const sortType = yield select(getSortType);
    const pageNum = 1;
    const params = {
      profile,
      query,
      config,
      pageNum,
      sortType
    };

    const data = yield call(fetchItems, params);
    const items = data.searchResult[0].item;
    const lastPage = data.paginationOutput[0].totalPages[0];
    yield put(receiveItems(items, lastPage));
  } 
  catch(e) {
    console.log('error in getItems(): ', e);
  }
}
export function* getPageItems(action) {
  try {
    // select query info from state
    const profile = yield select(getProfile);
    const query = yield select(getQuery);
    const config = yield select(getConfig);
    const sortType = yield select(getSortType);
    const pageNum = action.nextPage || 2;
    const params = {
      profile,
      query,
      config,
      pageNum,
      sortType
    };

    const data = yield call(fetchItems, params);
    const items = data.searchResult[0].item;

    yield put(receivePageItems(action.nextPage, items));
  } 
  catch(e) {
    console.log('error in getItems(): ', e);
  }
}
export function* getSpecificItems() {
  yield put(requestItems());
}

// Action Watchers
export function* watchRequestItems() {
  yield takeEvery(REQUEST_ITEMS, getItems);
}
export function* watchRequestItemPage() {
  yield takeEvery(REQUEST_ITEM_PAGE, getPageItems);
}
export function* watchAddProfile() {
  yield takeEvery(ADD_PROFILE, getSpecificItems);
}
export function* watchAddQuery() {
  yield takeEvery(ADD_QUERY, getSpecificItems);
}
export function* watchAddConfig() {
  yield takeEvery(ADD_CONFIG, getSpecificItems);
}
export function* watchAddSortType() {
  yield takeEvery(ADD_SORT_TYPE, getSpecificItems);
}

export default function* rootSaga() {
  yield all([
    watchRequestItems(),
    watchRequestItemPage(),
    watchAddProfile(),
    watchAddQuery(),
    watchAddConfig(),
    watchAddSortType()
  ]);
}
