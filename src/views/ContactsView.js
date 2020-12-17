import React, { Component } from "react"
import { CSSTransition } from "react-transition-group"
import { connect } from "react-redux"
import ContactList from "../components/ContactList"
import PhonebookForm from "../components/PhonebookForm"
import Filter from "../components/Filter"
import Logo from "../components/Logo"
import contactsOperations from "../redux/contacts/contactsOperations"

class ContactsView extends Component {
  componentDidMount() {
    this.props.onFetchTasks()
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

        {/* <CSSTransition
          in={this.props.contacts.items.length > 1}
          timeout={500}
          classNames={"filter"}
          unmountOnExit
        >
          <Filter />
        </CSSTransition> */}

        <ContactList />
      </>
    )
  }
}

const mapDispatchToProps = {
  onFetchTasks: contactsOperations.onFetchContacts,
}

export default connect(null, mapDispatchToProps)(ContactsView)
