import React, { Component } from "react"
import { connect } from "react-redux"
import { authOperations } from "../redux/auth"

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    padding: 4,
  },
}

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.onLogin({ ...this.state })
    this.setState({ name: "", email: "", password: "" })
  }

  render() {
    const { email, password } = this.state
    return (
      <>
        <h2>Log in</h2>
        <form onSubmit={this.handleSubmit} className={styles.form__group}>
          <input
            className={styles.form__input}
            name="email"
            type="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email"
            required
          />

          <input
            className={styles.form__input}
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Password"
            required
          />

          <button className={styles.button} type="submit">
            Log In
          </button>
        </form>
      </>
    )
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
}

export default connect(null, mapDispatchToProps)(LoginView)
