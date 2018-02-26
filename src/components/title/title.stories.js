import React from 'react'
import { storiesOf } from '@storybook/react'

import Title from './title'

storiesOf('Title', module).add('simple', () => <Title text="Je suis un titre" />)
storiesOf('Title', module).add('with subtitle', () => (
  <Title text="Je suis un titre" subtitle="Je suis un sous-titre" />
))
