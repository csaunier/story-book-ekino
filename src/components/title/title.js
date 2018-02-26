import React from 'react'
import PropTypes from 'prop-types'

import styles from './title.scss'

const Title = ({ text, subtitle }) => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>{text}</h1>
    {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
  </div>
)

Title.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Title
