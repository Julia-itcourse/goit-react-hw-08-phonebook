import axios from "axios"
import authActions from "./authActions"

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/'

const register = credentials => dispatch => {
    dispatch(authActions.registerRequest());

    axios
    .post('/users/signup', credentials)
    .then(resultData =>{
        // token.set(resultData.data.token);
        dispatch(authActions.registerSuccess(resultData.data));
    })
    .catch(error => dispatch(authActions.registerError(error)))
    }



const logIn = credentials => dispatch => {
    dispatch(authActions.loginRequest());

    axios
    .post('/users/login', credentials)
    .then(resultData =>{
        // token.set(resultData.data.token);
        dispatch(authActions.loginSuccess(resultData.data));
    })
    .catch(error => dispatch(authActions.loginError(error)))
    }



const logOut = () => dispatch => {
    dispatch(authActions.logoutRequest());

    axios
    .post ('users/logout')
    .then(() => {
        dispatch (authActions.logoutSuccess());
    })
    .catch(error => dispatch(authActions.logoutError(error)));
}

//const getCurrentUser

export default {register, logOut, logIn, getCurrentUser}