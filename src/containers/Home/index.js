import React from 'react'

import Title from '../../components/title/title'
import Team from '../../components/team/team'

import styles from './styles.scss'

import team from '../../../mocks/team.json'

const Home = () => (
  <div className={styles.layout}>
    <Title text="Story book example ekino" />
    <Team team={team} />
  </div>
)

export default Home
