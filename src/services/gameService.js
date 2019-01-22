// import store from '../store/store';
import AuthService from './autService';
import { config } from '../config';

export default class gameService {
  static open(gameCode) {
    if (!AuthService.isLoggedIn()) {
      alert('please log in first');
      return;
    }

    window.open(`${config.api}/#/${gameCode}`);
  }

  static openGame(gameCode) {
    setTimeout(() => {
      comeon.game.launch(gameCode);      
    }, 200);
  }
}