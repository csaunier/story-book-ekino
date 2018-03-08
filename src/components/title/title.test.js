import React from 'react'

import { shallow } from 'enzyme'

import Title from './title'

describe('component Title', () => {
  it('should render', () => {
    const component = shallow(<Title text="text" />)

    expect(component).toMatchSnapshot()
  })

  it('should render with a subtitle', () => {
    const component = shallow(<Title text="text" subtitle="subtitle" />)

    expect(component).toMatchSnapshot()
  })
})
