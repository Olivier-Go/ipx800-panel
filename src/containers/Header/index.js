import { connect } from 'react-redux';

import Header from 'src/components/Header';

const mapStateToProps = (state) => ({
  status: state.home.status,
  iconStatus: state.home.iconStatus,
  notificationsStatus: state.home.notificationsStatus,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
