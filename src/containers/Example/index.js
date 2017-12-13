import React from 'react'

import { Helmet } from 'react-helmet'
import { translate } from 'react-i18next'

import styles from './styles.scss'

const Example = ({ t }) => [
  <Helmet key="helmet">
    <title>{t('menu.example')}</title>
  </Helmet>,
  <div key="content" className={styles.example}>
    {t('example.content')}
  </div>,
]

export default translate()(Example)
