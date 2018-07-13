import { fetchItems } from '../../modules/ebay';
import {
  requestItems,
  receiveItems,
  receiveItemPage
} from '../actions/items';
import { getSortType } from '../reducers/search';
import { getProfile } from '../reducers/profile';
import { getQuery, getConfig } from '../reducers/search';
import { call, put, takeEvery, all, select } from 'redux-saga/effects';

export function* getItems(action) {
  try {
    const isFirstPage = action.type === 'REQUEST_ITEMS';
    // select request info from store
    const profile = yield select(getProfile);
    const query = yield select(getQuery);
    const config = yield select(getConfig);
    const sortType = yield select(getSortType);
    const pageNum = isFirstPage? 1 : action.nextPage || 2;
    const params = {
      profile,
      query,
      config,
      sortType,
      pageNum
    };

    const data = yield call(fetchItems, params);
    const items = data.searchResult[0].item;
    const lastPage = data.paginationOutput[0].totalPages[0];

    if(isFirstPage) {
      yield put(receiveItems(items, lastPage));
    } else {
      yield put(receiveItemPage(action.nextPage, items));
    }
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
  yield takeEvery(['REQUEST_ITEMS','REQUEST_ITEM_PAGE'], getItems);
}
export function* watchRequestChange() {
  const pattern = ['ADD_PROFILE','ADD_QUERY','ADD_CONFIG','ADD_SORT_TYPE'];
  yield takeEvery(pattern, getSpecificItems);
}

export default function* rootSaga() {
  yield all([
    watchRequestItems(),
    watchRequestChange()
  ]);
}
