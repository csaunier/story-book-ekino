import React from 'react'
import { storiesOf } from '@storybook/react'

import team from '../../../mocks/team.json'

import Engineer from './engineer'

storiesOf('Engineer', module).add('simple', () => <Engineer engineer={team.team[0]} />)
