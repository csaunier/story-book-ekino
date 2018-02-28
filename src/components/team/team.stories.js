import React from 'react'
import { storiesOf } from '@storybook/react'
import backgrounds from '@storybook/addon-backgrounds'

import team from '../../../mocks/team.json'

import Team from './team'

storiesOf('Team', module)
  .addDecorator(
    backgrounds([
      { name: 'default', value: '#eee', default: true },
      { name: 'twitter', value: '#00aced' },
      { name: 'facebook', value: '#3b5998' },
    ]),
  )
  .add('without state', () => <Team team={team} />)
