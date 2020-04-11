import produce from 'immer';

const INITIAL_STATE = {
  play: false,
};

export default function play(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@play/SEND_MUSIC_INFO_SUCCESS': {
        const { musicInfo } = action.payload;

        draft.play = true;
        draft.musicInfo = musicInfo;
        break;
      }
      default:
    }
  });
}
