import React from 'react'
import PropTypes from 'prop-types'

import styles from './teamIntro.scss'

const options = { year: 'numeric', month: 'long', day: '2-digit' }

const TeamIntro = ({ teamNumber, date }) =>
  teamNumber === 1 ? (
    <p className={styles.wrapper}>
      Il y a actuellement {teamNumber} ingénieur à date du{' '}
      {new Intl.DateTimeFormat('fr-FR', options).format(new Date(date))}. C&apos;est merveilleux,
      mais pas beaucoup beaucoup !!!
    </p>
  ) : (
    <p className={styles.wrapper}>
      Il y a actuellement {teamNumber} ingénieurs à date du{' '}
      {new Intl.DateTimeFormat('fr-FR', options).format(new Date(date))}. C&apos;est merveilleux !!!
    </p>
  )

TeamIntro.propTypes = {
  teamNumber: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
}

export default TeamIntro
