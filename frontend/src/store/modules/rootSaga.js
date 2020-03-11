import { all } from 'redux-saga/effects';

import play from './play/sagas';

export default function* rootSaga() {
  return yield all([play]);
}
