import { connect } from 'react-redux';
import { fetchSynoNotificationFilters } from 'src/actions/syno';

import Header from 'src/components/Header';

const mapStateToProps = (state) => ({
  status: state.home.status,
  iconStatus: state.home.iconStatus,
  notificationsStatus: state.home.notificationsStatus,
  notificationsStatusLoader: state.home.notificationsStatusLoader,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSynoNotificationFilters: () => {
    dispatch(fetchSynoNotificationFilters());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
