import { connect } from 'react-redux';

import Header from 'src/components/Header';

const mapStateToProps = (state) => ({
  status: state.home.status,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
