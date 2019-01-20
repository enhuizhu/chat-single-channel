import { combineReducers } from 'redux';
import { userInfo } from './userInfo';
import { games } from './games';

export default combineReducers({
  userInfo,
  games
});
