import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'; // pas très utile
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text } from '@storybook/addon-knobs/react'
import withTests from '../withTests'

import Filter from './filter'

const stories = storiesOf('Filter', module)

stories.addDecorator(withKnobs)

stories
  .add('nothing specific selected', () => (
    <Filter selectedFilter="" selectFilter={action('item selected')} />
  ))
  .add('selected item', () => {
    const selected = text('filter', '')
    return <Filter selectedFilter={selected} selectFilter={action('item selected')} />
  })
  .add(
    'simple info',
    withInfo(`
      This is a filter with no specific value selected
    
      ~~~js
       <Filter selectedFilter="" selectFilter={action('item selected')} />
      ~~~
    
    `)(() => <Filter selectedFilter="" selectFilter={action('item selected')} />),
  )
  .addDecorator(withTests('filter'))
  .add('This story shows test results from Filter', () => <div>Jest results in storybook</div>)
