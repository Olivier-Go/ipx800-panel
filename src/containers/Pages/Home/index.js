import { connect } from 'react-redux';
import { fetchConnection } from 'src/actions/home';

import Home from 'src/components/Pages/Home';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  fetchConnection: () => {
    dispatch(fetchConnection());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
