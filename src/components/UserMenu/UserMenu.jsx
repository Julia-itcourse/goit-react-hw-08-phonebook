import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {authSelectors, authOperations} from '../../redux/auth'
import {authOperations} from '../../redux/auth'
 //import { Test } from './UserMenu.styles';

const UserMenu = ({ name, email, onLogout }) => (
  <div className="UserMenuWrapper">
    <ul>
      <li>`Hello, ${name}`</li>
      <li>`Email: ${email}</li>
    </ul>
    <button className={styles.button} type="button" onClick={onLogout}>Log Out</button>
  </div>
 
)

UserMenu.propTypes = {
  // bla: PropTypes.string,
}

UserMenu.defaultProps = {
  // bla: 'test',
}

const mapStateToProps = (state) => ({
 name: authSelectors.getUserName(state),
 email: authSelectors.getUserEmail(state)
})

const mapDispatchToProps= {
  onLogout: authOperations.logOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)
