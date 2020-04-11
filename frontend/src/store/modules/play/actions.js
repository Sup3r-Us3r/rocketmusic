export function sendMusicInfoRequest(id) {
  return {
    type: '@play/SEND_MUSIC_INFO_REQUEST',
    payload: { id },
  };
}

export function sendMusicInfoSuccess(musicInfo) {
  return {
    type: '@play/SEND_MUSIC_INFO_SUCCESS',
    payload: { musicInfo },
  };
}
