import store from '../store/store';
import { playGame, closeGame} from '../actions'
import AuthService from './autService';

export default class gameService {
  static open(gameCode) {
    if (!AuthService.isLoggedIn()) {
      alert('please log in first');
      return;
    }

    store.dispatch(playGame());

    setTimeout(() => {
      comeon.game.launch(gameCode);      
    }, 200);
  }

  static close() {
    store.dispatch(closeGame());
  }
}