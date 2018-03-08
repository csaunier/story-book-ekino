import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
// import { LinkTo } from '@storybook/addon-links/react';
import withTests from '../withTests'

import Fitler from './filter'

storiesOf('Fitler', module)
  .add('nothing specific selected', () => (
    <Fitler selectedFilter="" selectFilter={action('item selected')} />
  ))
  .add('selected item', () => <Fitler selectedFilter="6" selectFilter={action('item selected')} />)
  .addDecorator(withTests('filter'))
  .add('This story shows test results from Fitler', () => <div>Jest results in storybook</div>)

storiesOf('Fitler with link addon', module).add('selected item', () => (
  <Fitler selectedFilter="" selectFilter={linkTo('Fitler', { selectedFilter: 'senior' })} />
))
