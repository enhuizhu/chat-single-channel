import { connect } from 'react-redux';
import App from './App';
import { login, logout } from './actions/index';

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (userInfo) => {
      dispatch(logout(userInfo));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;