import React, { PureComponent } from 'react'

import map from 'lodash/map'

import { Helmet } from 'react-helmet'
import { translate } from 'react-i18next'
import cx from 'classnames'

import styles from './styles.scss'

const items = {
  fr: 'switchLanguage.fr',
  en: 'switchLanguage.en',
  de: 'switchLanguage.de',
}

class SwitchLanguage extends PureComponent {
  handleChangeLanguage = value => {
    const { i18n } = this.props

    i18n.changeLanguage(value)
  }

  render() {
    const { t, i18n } = this.props
    const { language } = i18n

    return [
      <Helmet key="helmet">
        <html lang={language} />
      </Helmet>,
      <div key="content" className={styles['switch-language']}>
        {map(items, (content, locale) => (
          <SwitchLanguageItem
            key={locale}
            locale={locale}
            isActive={locale === language}
            onChangeLanguage={this.handleChangeLanguage}
          >
            {t(content)}
          </SwitchLanguageItem>
        ))}
      </div>,
    ]
  }
}

const SwitchLanguageItem = ({ locale, children, isActive, onChangeLanguage }) => (
  <button
    className={cx(styles['switch-language__item'], {
      [styles['switch-language__item--active']]: isActive,
    })}
    onClick={() => onChangeLanguage(locale)}
  >
    {children}
  </button>
)

export default translate()(SwitchLanguage)
