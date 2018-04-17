import { fetchItems } from '../modules/ebay';
import { REQUEST_ITEMS, requestItems, receiveItems } from './actions/items';
import { ADD_PROFILE } from './actions/profile';
import { getProfile } from './reducers/profile';
import { call, put, takeEvery, all, select } from 'redux-saga/effects';

export function* getItems(action) {
  try {
    let profile = yield select(getProfile);
    let gender = profile.gender? profile.gender : 'Men';
    let size = profile.upper? profile.upper : 'M';
    let keys = profile.brands? profile.brands : 'patagonia';

    console.log('profile in getItems: ', profile);
    const items = yield call(fetchItems, keys, gender, size);
    yield put(receiveItems(items));
  } catch (e) {
    console.log('error in getItems(): ', e);
  }
}

export function* watchGetItems() {
  yield takeEvery(REQUEST_ITEMS, getItems);
}
export function* watchSetProfile() {
  yield takeEvery(ADD_PROFILE, getItems);
}

export default function* rootSaga() {
  yield all([
    watchGetItems(),
    watchSetProfile()
  ])
}
