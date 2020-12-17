import React from "react"
import { connect } from "react-redux"
import { authSelectors, authOperations } from "../../redux/auth"
import styles from "./UserMenu.module.css"



const UserMenu = ({ name, email, onLogout }) => (
  <div className={styles.container}>
    <ul>
      <li className = {styles.user_item}>Hello, {name}</li>
      <li className = {styles.user_item}>Email: {email}</li>
    </ul>
    <button className={styles.button} type="button" onClick={onLogout}>
      Log Out
    </button>
  </div>
)

const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state),
  email: authSelectors.getUserEmail(state),
})

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)
