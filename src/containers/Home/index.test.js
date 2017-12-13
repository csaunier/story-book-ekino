import React from 'react'

import { shallow } from 'enzyme'

import Layout from './'

describe('component Layout', () =>
  it('should render', () => {
    const component = shallow(<Layout />)

    expect(component).toMatchSnapshot()
  }))
