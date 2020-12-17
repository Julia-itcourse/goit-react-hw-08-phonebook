import React from "react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
// import { styles } from "./NavBar.module.css"


const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#8fc1e3',
  },
  activeLink: {

    color: '#ffffff',
    textDecoration: 'underline'
  },
};

const NavBar = (props) => (
  <div className="NavBarWrapper">
    <ul className={styles.navbar}>
      <li className={styles.navbarItem}>
        <NavLink
          exact
          to="/login"
          className="Navigation-link"
          activeClassName={styles.activeLink}
        >
          Log In
        </NavLink>
      </li>
      <li className={styles.navbarItem}>
        {" "}
        <NavLink
          to="/register"
          className="Navigation-link"
          activeClassName="Navigation-link-active"
        >
          Register
        </NavLink>
      </li>
    </ul>
  </div>
)

NavBar.propTypes = {
  // bla: PropTypes.string,
}

NavBar.defaultProps = {
  // bla: 'test',
}

const mapStateToProps = (state) => ({
  // blabla: state.blabla,
})

const mapDispatchToProps = (dispatch) => ({
  // fnBlaBla: () => dispatch(action.name()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
