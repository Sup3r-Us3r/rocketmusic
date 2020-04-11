import { call, put, select, all, takeLatest } from 'redux-saga/effects';

import { sendMusicInfoSuccess } from './actions';

import api from '../../../services/api';

export function* play({ payload }) {
  const { id } = payload;

  // const headerParams = {
  //   responseType: 'blob',
  // };

  // const response = yield call(api.get, `/musics/${id}`, {
  //   headers: headerParams,
  // });

  const response = yield call(api.get, `/musics/info/${id}`);

  const musicId = { id };

  const data = Object.assign(musicId, response.data);

  yield put(sendMusicInfoSuccess(data));
}

export default all([takeLatest('@play/SEND_MUSIC_INFO_REQUEST', play)]);
