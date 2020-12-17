import React, { Component } from "react"
import { connect } from "react-redux"
import { authOperations } from "../redux/auth"

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    padding: 4,
  },
};

class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onRegister({ ...this.state })
    this.setState({ name: "", email: "", password: "" })
  }

  render() {
    const { name, email, password } = this.state
    return (
      <>
        <h2>Sign up</h2>
        <form onSubmit={this.handleSubmit} className={styles.form__group}>
          <input
            className={styles.form__input}
            name="name"
            type="text"
            value={name}
            onChange={this.handleChange}
            placeholder="Name"
            required
          />

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
            Sign Up
          </button>
        </form>
      </>
    )
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
}

export default connect(null, { mapDispatchToProps })(RegisterView)
