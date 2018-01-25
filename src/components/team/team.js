import React from 'react'
import PropTypes from 'prop-types'

import options from '../../../mocks/filter.json'

import Engineer from '../../components/engineer/engineer'
import TeamIntro from '../../components/teamIntro/teamIntro'
import Filter from '../../components/filter/filter'

import styles from './team.scss'

const getFilteredTeam = (fullTeam, key, value) => {
  if (value === '') {
    return fullTeam
  }
  return fullTeam.filter(engineer => engineer[key] === value)
}

class Team extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSelectedFilter: '',
    }
  }

  selectFilter = event => {
    this.setState({ currentSelectedFilter: event.target.value })
  }

  render() {
    const { team: { date, team } } = this.props
    const { currentSelectedFilter } = this.state

    const optionSelected = options.find(option => option.value === currentSelectedFilter)
    const { key, description } = optionSelected
    const currentTeam = getFilteredTeam(team, key, currentSelectedFilter)

    return (
      <div>
        <header className={styles.header}>
          <TeamIntro teamNumber={team.length} date={date} />
          <Filter selectedFilter={currentSelectedFilter} selectFilter={this.selectFilter} />
        </header>
        <p className={styles.description}>{description}</p>
        <ul className={styles.wrapper}>
          {currentTeam.map(engineer => <Engineer key={engineer.id} engineer={engineer} />)}
        </ul>
      </div>
    )
  }
}

Team.propTypes = {
  team: PropTypes.object.isRequired,
}

export default Team
