import { connect } from 'react-redux';
import { fetchStatus, fetchOutputs, setOutput } from 'src/actions/home';

import Home from 'src/components/Pages/Home';

const mapStateToProps = (state) => ({
  outputs: state.home.outputs,
  notificationsLabel: state.home.notificationsLabel,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStatus: () => {
    dispatch(fetchStatus());
  },
  fetchOutputs: () => {
    dispatch(fetchOutputs());
  },
  setOutput: (value) => {
    dispatch(setOutput(value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
