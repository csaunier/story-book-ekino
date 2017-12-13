import React from 'react'

import { configure, addDecorator } from '@storybook/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { I18nextProvider } from 'react-i18next'

import i18n from 'i18n'

import styles from './styles.scss'

import 'styles/main.scss'

const store = createStore(() => {})
const req = require.context('../src', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(story => (
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <BrowserRouter>
        <div className={styles.storybook}>{story()}</div>
      </BrowserRouter>
    </Provider>
  </I18nextProvider>
))

configure(loadStories, module)
