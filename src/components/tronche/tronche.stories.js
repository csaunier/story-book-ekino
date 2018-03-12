import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs/react'

import team from '../../../mocks/team.json'

import Tronche from './tronche'

const stories = storiesOf('Tronche', module)

stories.addDecorator(withKnobs)

stories.add('simple', () => {
  const gender = text('gender', team.team[0].gender)
  const firstName = text('firstName', team.team[0].firstName.toLowerCase())
  const name = text('name', team.team[0].name.toLowerCase())

  return (
    <Tronche
      defaultSrc="/assets/img/team/default.jpg"
      src={`/assets/img/team/${firstName}-${name}.jpg`}
      gender={gender}
    />
  )
})
