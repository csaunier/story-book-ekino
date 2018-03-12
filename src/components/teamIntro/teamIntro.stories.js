import React from 'react'
import { storiesOf } from '@storybook/react'

import { withKnobs, date, number } from '@storybook/addon-knobs/react'

import team from '../../../mocks/team.json'

import TeamIntro from './teamIntro'

const stories = storiesOf('TeamIntro', module)

stories.addDecorator(withKnobs)

stories.add('simple', () => {
  const theDate = new Date(date('date', new Date(team.date)))
  const theNumber = number('teamNumber', team.team.length)

  return <TeamIntro date={theDate} teamNumber={theNumber} />
})
