import React from 'react'
import PropTypes from 'prop-types'

import Engineer from '../../components/engineer/engineer'
import TeamIntro from '../../components/teamIntro/teamIntro'

import styles from './team.scss'

const Team = ({ team }) => (
  <div>
    <TeamIntro teamNumber={team.team.length} date={team.date} />
    <ul className={styles.wrapper}>
      {team.team.map(engineer => <Engineer key={engineer.id} engineer={engineer} />)}
    </ul>
  </div>
)

Team.propTypes = {
  team: PropTypes.object.isRequired,
}

export default Team
