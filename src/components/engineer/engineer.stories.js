import React from 'react'
import { storiesOf } from '@storybook/react'

import { withKnobs, object } from '@storybook/addon-knobs/react'

import team from '../../../mocks/team.json'

import Engineer from './engineer'

const stories = storiesOf('Engineer', module)

stories.addDecorator(withKnobs)

stories.add('simple', () => {
  const datas = object('datas', team.team[0])

  return <Engineer engineer={datas} />
})
