import LoginForm from './loginForm';
import { connect } from 'react-redux';
import { login } from '../../actions/index';

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userInfo) => {
      dispatch(login(userInfo));
    },
  };
};

const LoginFormContainer = connect(
  null,
  mapDispatchToProps
)(LoginForm);

export default LoginFormContainer;