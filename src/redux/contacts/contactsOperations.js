import axios from "axios"
import contactsActions from "./contactsActions"

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/"

const onAddContact = ({ name, number }) => (dispatch) => {
  dispatch(contactsActions.addContactRequest())

  axios
    .post("/contacts", { name, number })
    .then((receivedData) => {
      dispatch(contactsActions.addContactSuccess(receivedData.data))
    })
    .catch((error) => dispatch(contactsActions.addContactError(error)))
}

const onFetchContacts = () => (dispatch) => {
  dispatch(contactsActions.fetchContactRequest())

  axios
    .get("/contacts")
    .then((receivedData) =>
      dispatch(contactsActions.fetchContactSuccess(receivedData.data))
    )
    .catch((error) => dispatch(contactsActions.fetchContactError(error)))
}

const onRemoveContacts = (id) => (dispatch) => {
  dispatch(contactsActions.removeContactRequest())

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.removeContactSuccess(id)))
    .catch((error) => dispatch(contactsActions.removeContactError(error)))
}

export default {
  onAddContact,
  onFetchContacts,
  onRemoveContacts,
}
