import React from 'react'
import PropTypes from 'prop-types'

import Tronche from '../../components/tronche/tronche'

import styles from './engineer.scss'

const Engineer = ({ engineer }) => (
  <li className={styles.wrapper}>
    <div className={styles.troncheWrapper}>
      <Tronche
        src={`/assets/img/team/${engineer.firstName.toLowerCase()}-${engineer.name.toLowerCase()}.jpg`}
        defaultSrc="/assets/img/team/default.jpg"
        gender={engineer.gender}
      />
    </div>
    <div className={styles.infosWrapper}>
      {engineer.firstName} {engineer.name}
    </div>
  </li>
)

Engineer.propTypes = {
  engineer: PropTypes.object.isRequired,
}

export default Engineer
