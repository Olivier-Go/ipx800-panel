import { connect } from 'react-redux';
import { fetchAuth } from 'src/actions/login';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  userAuth: state.login.userAuth,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAuth: () => {
    dispatch(fetchAuth());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
