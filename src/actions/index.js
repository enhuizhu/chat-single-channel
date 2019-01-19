import ApiService from '../services/apiService';
import { LOGIN, LOGOUT } from '../reducers/userInfo';

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