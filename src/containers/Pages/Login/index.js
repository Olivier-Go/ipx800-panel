import { connect } from 'react-redux';
import { setPassword, clearPassword, checkPassword } from 'src/actions/login';

import Login from 'src/components/Pages/Login';

const mapStateToProps = (state) => ({
  password: state.login.password,
});

const mapDispatchToProps = (dispatch) => ({
  handlePassword: (value) => {
    dispatch(setPassword(value));
  },
  clearPsswd: () => {
    dispatch(clearPassword());
  },
  checkAuth: () => {
    dispatch(checkPassword());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
