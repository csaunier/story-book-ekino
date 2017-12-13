import React from 'react'

import map from 'lodash/map'

import { NavLink, withRouter } from 'react-router-dom'
import { translate } from 'react-i18next'

import styles from './styles.scss'

const items = {
  '/': 'menu.home',
  '/example': 'menu.example',
}

const Menu = ({ t, location }) => (
  <div className={styles.menu}>
    {map(items, (content, route) => (
      <MenuItem key={route} to={route} isActive={location.pathname === route}>
        {t(content)}
      </MenuItem>
    ))}
  </div>
)

const MenuItem = ({ children, isActive, ...props }) => (
  <NavLink
    activeClassName={styles['menu__item--active']}
    className={styles.menu__item}
    isActive={() => isActive}
    {...props}
  >
    {children}
  </NavLink>
)

export default translate()(withRouter(Menu))
