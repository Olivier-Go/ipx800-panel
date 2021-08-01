import { connect } from 'react-redux';

import Header from 'src/components/Header';

const mapStateToProps = (state) => ({
  device: state.home.device,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
