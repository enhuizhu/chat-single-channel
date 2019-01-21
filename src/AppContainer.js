import { connect } from 'react-redux';
import App from './App';
import { login, logout, closeGame } from './actions/index';

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (userInfo) => {
      dispatch(logout(userInfo));
    },
    closeGame: () => {
      dispatch(closeGame());
    }
  };
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
    games: state.games.games ? state.games.games : [],
    categories: state.games.categories ? state.games.categories: [],
    isPlayingGame: state.gameVisibility
  }
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;