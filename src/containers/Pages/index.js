import { connect } from 'react-redux';
import { resetSnackbar } from 'src/actions/home';

import Pages from 'src/components/Pages';

const mapStateToProps = (state) => ({
  userAuth: state.login.userAuth,
  redirectTo: state.login.redirectTo,
  snackbar: state.home.snackbar,
  snackbarType: state.home.snackbarType,
  snackbarMessage: state.home.snackbarMessage,
});

const mapDispatchToProps = (dispatch) => ({
  resetSnackbar: () => {
    dispatch(resetSnackbar());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pages);
