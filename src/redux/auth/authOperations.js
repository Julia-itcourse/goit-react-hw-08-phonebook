import axios from "axios"
import authActions from "./authActions"

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/"

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization = ""
  },
}

const register = (credentials) => (dispatch) => {
  console.log("register - before dispatch", credentials)
  dispatch(authActions.registerRequest())

  console.log("register - after dispatch", credentials)

  axios
    .post("/users/signup", credentials)
    .then((resultData) => {
      token.set(resultData.data.token)
      dispatch(authActions.registerSuccess(resultData.data))
    })
    .catch((error) => dispatch(authActions.registerError(error)))
}

const logIn = (credentials) => (dispatch) => {
  dispatch(authActions.loginRequest())

  axios
    .post("/users/login", credentials)
    .then((resultData) => {
      token.set(resultData.data.token)
      dispatch(authActions.loginSuccess(resultData.data))
    })
    .catch((error) => dispatch(authActions.loginError(error)))
}

const logOut = () => (dispatch) => {
  dispatch(authActions.logoutRequest())

  axios
    .post("users/logout")
    .then(() => {
      token.unset()
      dispatch(authActions.logoutSuccess())
    })
    .catch((error) => dispatch(authActions.logoutError(error)))
}

const onGetCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState()

  if (!persistedToken) {
    return
  }

  token.set(persistedToken)
  dispatch(authActions.getCurrentUserRequest())

  axios
    .get("users/current")
    .then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))
    .catch((error) => dispatch(authActions.getCurrentUserError(error)))
}

export default { register, logOut, logIn, onGetCurrentUser }
