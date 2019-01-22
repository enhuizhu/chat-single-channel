import { connect } from 'react-redux';
import App from './App';
import { logout } from './actions/index';

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (userInfo) => {
      dispatch(logout(userInfo));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
    games: state.games.games ? state.games.games : [],
    categories: state.games.categories ? state.games.categories: [],
  }
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;