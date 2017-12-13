import React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router'

import Home from 'containers/Home'

export default (store, Router, routerProps) => (
  <Provider store={store}>
    <Router {...routerProps}>
      <Route path="/" component={Home} />
    </Router>
  </Provider>
)
