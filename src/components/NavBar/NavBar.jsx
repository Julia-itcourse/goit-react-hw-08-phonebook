import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { Test } from './NavBar.styles';

const NavBar = (props) => (
  <div className="NavBarWrapper">
 <ul className = {styles.navbar}>
  <li className = {styles.navbarItem}>
    <NavLink exact to = "/" className = "Navigation-link" activeClassName = 'Navigation-link-active'>Log In</NavLink>
  </li>
  <li  className = {styles.navbarItem}> <NavLink to = "/register"  className = "Navigation-link" activeClassName = 'Navigation-link-active'>Register</NavLink></li>
</ul>
  </div>
);


NavBar.propTypes = {
  // bla: PropTypes.string,
};

NavBar.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
