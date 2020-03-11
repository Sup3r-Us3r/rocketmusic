export function playingRequest(id) {
  return {
    type: '@play/PLAYING_REQUEST',
    payload: { id },
  };
}
