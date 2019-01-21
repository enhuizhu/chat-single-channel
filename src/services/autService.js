import store from '../store/store';

export default class AuthService {
  static isLoggedIn() {
    const state = store.getState();
    return !!state.userInfo;
  }
}