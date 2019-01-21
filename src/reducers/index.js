import { combineReducers } from 'redux';
import { userInfo } from './userInfo';
import { games, gameVisibility } from './games';

export default combineReducers({
  userInfo,
  games,
  gameVisibility
});
