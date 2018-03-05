import { fetchItems } from '../modules/ebay';
import { REQUEST_ITEMS, receiveItems } from './actions/items';
import { call, put, takeLatest } from 'redux-saga/effects';

export function* getItems() {
  console.log("in getItems() generator");

  try {
    const items = yield call(fetchItems);
    yield put(receiveItems(items));
  } catch (e) {
    console.log('error in getItems(): ', e);
  }
}

export default function* rootSaga() {
  console.log('in root saga');
  yield takeLatest(REQUEST_ITEMS, getItems);
}
