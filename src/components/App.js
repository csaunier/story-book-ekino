import React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router'

import Layout from 'containers/Layout'

export default (store, Router, routerProps) => (
  <Provider store={store}>
    <Router {...routerProps}>
      <Route path="/" component={Layout} />
    </Router>
  </Provider>
)
