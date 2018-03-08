import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
// import { LinkTo } from '@storybook/addon-links/react';
import withTests from '../withTests'

import Filter from './filter'

storiesOf('Filter', module)
  .add('nothing specific selected', () => (
    <Filter selectedFilter="" selectFilter={action('item selected')} />
  ))
  .add('selected item', () => <Filter selectedFilter="6" selectFilter={action('item selected')} />)
  .addDecorator(withTests('filter'))
  .add('This story shows test results from Filter', () => <div>Jest results in storybook</div>)

storiesOf('Filter with link addon', module).add('selected item', () => (
  <Filter selectedFilter="" selectFilter={linkTo('Filter', { selectedFilter: 'senior' })} />
))
