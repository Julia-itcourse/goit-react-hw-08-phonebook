import React, { Component } from "react"
import ContactList from "../ContactList"
import PhonebookForm from "../PhonebookForm"
import Filter from "../Filter"
import Logo from "../Logo"
import { CSSTransition } from "react-transition-group"
import { connect } from "react-redux"
import contactsOperations from "../../redux/contacts/contactsOperations"
import authOperations from "../../redux/auth/authOperations"


class App extends Component {
  // state = {
  //   showNotification: false,
  // }

  componentDidMount(){
    this.props.onFetchContacts();
    this.props.onGetCurrentUser()
  }

  render() {
    return (
      <>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="Logo-slideIn"
        >
          <Logo />
        </CSSTransition>

        <PhonebookForm />

        <CSSTransition
          in={this.props.contacts.items.length > 1}
          timeout={500}
          classNames={"filter"}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>

        <ContactList />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("App.mapStateToProps")
  return { contacts: state.contacts }
}

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.onFetchContacts,
  onGetCurrentUser: authOperations.onGetCurrentUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
