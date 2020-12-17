import React from "react"
import { connect } from "react-redux"
import { authSelectors, authOperations } from "../../redux/auth"
// import { styles } from "./UserMenu.styles"

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
}

const UserMenu = ({ name, email, onLogout }) => (
  <div className="UserMenuWrapper">
    <ul>
      <li>Hello, {name}</li>
      <li>Email: {email}</li>
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
