import React from 'react'
import { storiesOf } from '@storybook/react'
import backgrounds from '@storybook/addon-backgrounds'

import team from '../../../mocks/team.json'

import Team from './team'

storiesOf('Team', module)
  .addDecorator(
    backgrounds([
      { name: 'default', value: '#eee', default: true },
      { name: 'purple', value: '#630fc9' },
      { name: 'blue', value: '#177abe' },
    ]),
  )
  .add('full component', () => <Team team={team} />)
