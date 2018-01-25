import React from 'react'
import PropTypes from 'prop-types'

import styles from './title.scss'

const Title = ({ text }) => <h1 className={styles.wrapper}>{text}</h1>

Title.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Title
