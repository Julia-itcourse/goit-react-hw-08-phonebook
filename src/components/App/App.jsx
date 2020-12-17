import React, { Component, Suspense } from "react"
import { BrowserRouter, Switch } from "react-router-dom"
import { connect } from "react-redux"
import routes from "../../routes"
import PrivateRoute from "../PrivateRoute"
import PublicRoute from "../PublicRoute"

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
