import ApiService from '../services/apiService';
import { LOGIN, LOGOUT } from '../reducers/userInfo';
import { RECEIVE_GAMES } from '../reducers/games';

const errorHandler = (e) => {
  alert(e.response.data.error);
}

export const loginSync = (userInfo) => {
  return {
    type: LOGIN,
    payload: userInfo
  }
}

export const login = (userInfo) => {
  return (dispatch) => {
    
    ApiService.login(userInfo).then(res => {
      dispatch(loginSync(res.data.player));

    }).catch(errorHandler);
  }
}

export const logoutSync = () => {
  return {
    type: LOGOUT
  }
}

export const logout = (userInfo) => {
  return (dispatch) => {
    ApiService.logout(userInfo).then(res => {
      dispatch(logoutSync());
    }).catch(errorHandler);
  }
}

export const receiveGames = (games) => {
  return {
    type: RECEIVE_GAMES,
    payload: games
  }
}