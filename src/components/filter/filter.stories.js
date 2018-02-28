import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Fitler from './filter'

storiesOf('Fitler', module).add('nothing specific selected', () => (
  <Fitler selectedFilter="" selectFilter={action('item selected')} />
))

storiesOf('Fitler', module).add('selected item', () => (
  <Fitler selectedFilter="6" selectFilter={action('item selected')} />
))
