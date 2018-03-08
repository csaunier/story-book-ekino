import React from 'react'
import { storiesOf } from '@storybook/react'

import team from '../../../mocks/team.json'

import Tronche from './tronche'

storiesOf('Tronche', module).add('simple', () => (
  <Tronche
    defaultSrc="/assets/img/team/default.jpg"
    src={`/assets/img/team/${team.team[0].firstName.toLowerCase()}-${team.team[0].name.toLowerCase()}.jpg`}
    gender={team.team[0].gender}
  />
))
