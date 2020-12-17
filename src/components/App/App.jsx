import React, { Component, Suspense } from "react"
import { BrowserRouter, Switch } from "react-router-dom"
import { CSSTransition } from "react-transition-group"
import { connect } from "react-redux"
import routes from "../../routes"
import PrivateRoute from "../PrivateRoute"
import PublicRoute from "../PublicRoute"
import ContactList from "../ContactList"
import PhonebookForm from "../PhonebookForm"
import Filter from "../Filter"
import Logo from "../Logo"
import Layout from "../Layout"
import contactsOperations from "../../redux/contacts/contactsOperations"
import authOperations from "../../redux/auth/authOperations"

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts()
    this.props.onGetCurrentUser()
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              {routes.map((route) =>
                route.private ? (
                  <PrivateRoute key={route.label} {...route} />
                ) : (
                  <PublicRoute key={route.label} {...route} />
                )
              )}
            </Switch>
          </Suspense>
        </Layout>
      </BrowserRouter>
    )

    // TODO - ZAKHAREG: move to Contacts
    // return (
    //   <>
    //     <CSSTransition
    //       in={true}
    //       appear={true}
    //       timeout={500}
    //       classNames="Logo-slideIn"
    //     >
    //       <Logo />
    //     </CSSTransition>

    //     <PhonebookForm />

    //     <CSSTransition
    //       in={this.props.contacts.items.length > 1}
    //       timeout={500}
    //       classNames={"filter"}
    //       unmountOnExit
    //     >
    //       <Filter />
    //     </CSSTransition>

    //     <ContactList />
    //   </>
    // )
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
