import React from 'react'

import { Switch, Route } from 'react-router'

import routes from 'routes'

import Menu from 'components/Menu'
import SwitchLanguage from 'components/SwitchLanguage'

import styles from './styles.scss'

const Layout = () => (
  <div className={styles.layout}>
    <Menu />
    <Switch>{routes.map(route => <Route key={route.path} {...route} />)}</Switch>
    <SwitchLanguage />
  </div>
)

export default Layout
