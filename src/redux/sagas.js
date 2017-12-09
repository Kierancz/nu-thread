import { fetchItems } from '../modules/ebay';
import { put, take } from 'redux-saga/effects';

export function* loadItems() {
  console.log("in loadItems() generator");
  const items = yield fetchItems();
  console.log("fetched items: ", items);
  yield put({type: 'ITEMS_LOADED', items});
}

export function* watchForLoadItems() {
  while(true) {
    // take listens for actions of provided type then advances
    yield take('LOAD_ITEMS');
    yield loadItems();
  }
}