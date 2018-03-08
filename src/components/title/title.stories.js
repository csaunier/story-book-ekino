import React from 'react'
import { storiesOf } from '@storybook/react'
import withTests from '../withTests'

import Title from './title'

storiesOf('Title', module).add('simple', () => <Title text="Je suis un titre" />)
storiesOf('Title', module).add('with subtitle', () => (
  <Title text="Je suis un titre" subtitle="Je suis un sous-titre" />
))

storiesOf('Title', module)
  .addDecorator(withTests('title'))
  .add('This story shows test results from Title', () => <div>Jest results in storybook</div>)
