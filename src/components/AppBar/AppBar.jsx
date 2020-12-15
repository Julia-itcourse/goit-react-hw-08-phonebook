import React from 'react';
import NavBar from '../NavBar';
import UserMenu from '../UserMenu';
import {authSelectors} from '../../redux/auth'
import { connect } from 'react-redux';


const styles = {
  header:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', 
    backgroundColor: '#5085A5',
    color: '#ffffff'
  }
}

const AppBar = ({isAuthenticated}) => (
<header style = {styles.header}>
{!isAuthenticated && <NavBar/>}
{isAuthenticated && <UserMenu/>}
</header>
);

AppBar.propTypes = {
  // bla: PropTypes.string,
};

AppBar.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
isAuthenticated: authSelectors.isAuthenticated(state),
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppBar);
