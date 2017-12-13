import React from 'react'
import ReactDOM from 'react-dom'

import { I18nextProvider } from 'react-i18next'
import { AppContainer } from 'react-hot-loader'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import i18n from 'i18n'
import createStore from 'store'

import App from 'components/App'

import 'styles/main.scss'

const history = createHistory()
const store = createStore(history, window.__INITIAL_STATE__)

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <I18nextProvider i18n={i18n}>
        {Component(store, ConnectedRouter, { history })}
      </I18nextProvider>
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(App)

if (module.hot) {
  module.hot.accept('components/App', () => {
    const nextApp = require('components/App')
    render(nextApp)
  })
}
