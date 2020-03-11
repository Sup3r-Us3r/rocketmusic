// import { call, put, select, all, takeLatest } from 'redux-saga/effects';

// import { playingSuccess } from './actions';

// import api from '../../../services/api';

// export function* play({ payload }) {
//   const { id } = payload;

//   const response = yield call(api.get, `/music/${id}`);

//   yield put(playingSuccess(response.data.music));
// }

// export default all([takeLatest('@play/PLAYING_REQUEST', play)]);
