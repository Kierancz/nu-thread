import { all, fork } from 'redux-saga/effects';
import items from './items';
import auth from './auth';

export default function* rootSaga() {
  yield all([
    fork(items),
    fork(auth)
  ]);
}
