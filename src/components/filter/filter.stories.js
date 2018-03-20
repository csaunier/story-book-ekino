import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs/react'
import withTests from '../withTests'

import Filter from './filter'

const stories = storiesOf('Filter', module)

stories.addDecorator(withKnobs)

stories
  .add('nothing specific selected', () => (
    <Filter selectedFilter="" selectFilter={action('item selected')} />
  ))
  .addDecorator(withTests('filter'))
  .add('This story shows test results from Filter', () => <div>Jest results in storybook</div>)
