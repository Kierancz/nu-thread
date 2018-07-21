import { connect } from 'react-redux';
import SideNav from '../../components/SideNav';

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const Nav = connect(
  mapStateToProps,
  null
)(SideNav);

export default Nav;
