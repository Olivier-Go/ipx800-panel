import { connect } from 'react-redux';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  userAuth: state.login.userAuth,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
