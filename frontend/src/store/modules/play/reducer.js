import produce from 'immer';

const INITIAL_STATE = {
  play: 0,
};

export default function play(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@play/PLAYING_REQUEST': {
        draft.play = 1;
        break;
      }
      default:
    }
  });
}
