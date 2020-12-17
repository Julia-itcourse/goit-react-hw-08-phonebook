import React from "react"
import NavBar from "../NavBar"
import UserMenu from "../UserMenu"
import Navigation from '../Navigation';
import { authSelectors } from "../../redux/auth"
import { connect } from "react-redux"

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#5085A5",
    color: "#ffffff",
  },
}

const AppBar = ({ isAuthenticated }) => (
  <header style={styles.header}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <NavBar />}
  </header>
)

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
})

export default connect(mapStateToProps)(AppBar)
