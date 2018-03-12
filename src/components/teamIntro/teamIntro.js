import React from 'react'
import PropTypes from 'prop-types'

import styles from './teamIntro.scss'

const options = { year: 'numeric', month: 'long', day: '2-digit' }

const TeamIntro = ({ teamNumber, date }) => {
  let markup = null

  switch (teamNumber) {
    case 0:
      markup = (
        <p className={styles.wrapper}>
          Il y a actuellement {teamNumber} ingénieur à date du
          {new Intl.DateTimeFormat('fr-FR', options).format(new Date(date))}. C&apos;est vraiment
          pas terrible !!!
        </p>
      )
      break
    case 1:
      markup = (
        <p className={styles.wrapper}>
          Il y a actuellement {teamNumber} ingénieur à date du
          {new Intl.DateTimeFormat('fr-FR', options).format(new Date(date))}. C&apos;est
          merveilleux, mais pas beaucoup beaucoup !!!
        </p>
      )
      break
    default:
      markup = (
        <p className={styles.wrapper}>
          Il y a actuellement {teamNumber} ingénieurs à date du{' '}
          {new Intl.DateTimeFormat('fr-FR', options).format(new Date(date))}. C&apos;est merveilleux
          !!!
        </p>
      )
  }

  return markup
}

TeamIntro.propTypes = {
  teamNumber: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
}

export default TeamIntro
