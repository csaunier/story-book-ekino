import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs/react'
import { checkA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import team from '../../../mocks/team.json'

import Tronche from './tronche'

const stories = storiesOf('Tronche', module)

const gender = text('gender', team.team[0].gender)
const firstName = text('firstName', team.team[0].firstName.toLowerCase())
const name = text('name', team.team[0].name.toLowerCase())

stories.addDecorator(withKnobs)
stories.addDecorator(checkA11y)

stories.add('simple', () => (
  <Tronche
    defaultSrc="/assets/img/team/default.jpg"
    src={`/assets/img/team/${firstName}-${name}.jpg`}
    gender={gender}
  />
))

const stories2 = storiesOf('Tronche', module)

stories2.add(
  'with info',
  withInfo(`
      This is a filter with no specific value selected

      ~~~js
       <Tronche
        defaultSrc="/assets/img/team/default.jpg"
        src={\`/assets/img/team/${firstName}-${name}.jpg\`}
        gender={gender}
      />
      ~~~

    `)(() => (
    <Tronche
      defaultSrc="/assets/img/team/default.jpg"
      src={`/assets/img/team/${firstName}-${name}.jpg`}
      gender={gender}
    />
  )),
)
