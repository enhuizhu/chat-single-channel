export const RECEIVE_GAMES = 'RECEIVE_GAMES';

let defaultState;

if (typeof window != 'undefined' && window._GAMES) {
  defaultState = window._GAMES;
  delete window._GAMES;
} else {
  defaultState = {}
}

export const games = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_GAMES:
      return action.payload;
    default:
      return state;
  }
};
