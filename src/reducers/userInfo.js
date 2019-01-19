export const LOGIN = 'login';
export const LOGOUT = 'logout';

const defaultState = null;

export const userInfo = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    default:
      return defaultState;
  }
};
