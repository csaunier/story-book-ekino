import React from 'react'
import { storiesOf } from '@storybook/react'

import Title from './title'

storiesOf('Title', module).add('with text', () => <Title text="je suis un titre" />)
