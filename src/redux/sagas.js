import { fetchItems } from '../modules/ebay';
import { put, take } from 'redux-saga/effects';

export function* loadItems() {
  console.log("in loadItems() generator");
  const items = yield fetchItems();
  console.log("fetched items: ", items);
  // put is redux-sagas version of dispatch
  yield put({type: 'ITEMS_LOADED', items});
}

export function* watchForLoadItems() {
  console.log('in watchForLoadItems()');
  while(true) {
    // take listens for actions of provided type then advances
    yield take('LOAD_ITEMS');
    yield loadItems();
  }
}
