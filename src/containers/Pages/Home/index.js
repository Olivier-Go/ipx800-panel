import { connect } from 'react-redux';
import { fetchStatus, fetchOutputs } from 'src/actions/home';

import Home from 'src/components/Pages/Home';

const mapStateToProps = (state) => ({
  outputs: state.home.outputs,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStatus: () => {
    dispatch(fetchStatus());
  },
  fetchOutputs: () => {
    dispatch(fetchOutputs());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
