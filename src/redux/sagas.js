import { fetchItems } from '../modules/ebay';
import { REQUEST_ITEMS, receiveItems } from './actions/items';
import { ADD_PROFILE } from './actions/profile';
import { call, put, takeEvery, all } from 'redux-saga/effects';

export function* getItems() {
  //console.log("in getItems() generator");
  let gender = 'Men';
  let keys = 'patagonia';
  let size = 'M';

  try {
    const items = yield call(fetchItems, keys, gender, size);
    yield put(receiveItems(items));
  } catch (e) {
    console.log('error in getItems(): ', e);
  }
}

export function* setProfile(action) {
  console.log('in setProfile generator. action: ', action);
  let keys = 'pendleton';
  let gender = action.profile.gender;
  let size = action.profile.upper;

  const items = yield call(fetchItems, keys, gender, size);
  yield put(receiveItems(items));
}

export function* watchGetItems() {
  yield takeEvery(REQUEST_ITEMS, getItems);
}
export function* watchSetProfile() {
  yield takeEvery(ADD_PROFILE, setProfile);
}

export default function* rootSaga() {
  yield all([
    watchGetItems(),
    watchSetProfile()
  ])
}
