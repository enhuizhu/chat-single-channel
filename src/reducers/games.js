import { closeGame } from "../actions";

export const RECEIVE_GAMES = 'RECEIVE_GAMES';
export const PLAY_GAME = 'PLAY_GAME';
export const CLOSE_GAME = 'CLOSE_GAME';

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

export const gameVisibility = (state = false, action) => {
  switch (action.type) {
    case PLAY_GAME:
      return true;
    case CLOSE_GAME:
      return false;
    default:
      return state;
  }
};