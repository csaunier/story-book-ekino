import React from 'react'

import { shallow } from 'enzyme'

import Filter from './filter'

jest.mock('shortid', () => ({ generate: () => '' }))

const props1 = {
  selectedFilter: '',
  selectFilter: jest.fn(),
}

const props2 = {
  selectedFilter: 'senior',
  selectFilter: jest.fn(),
}

describe('component Title', () => {
  it('should render by default with all member', () => {
    const component = shallow(<Filter {...props1} />)

    expect(component).toMatchSnapshot()
  })

  it('should render with a selected filter', () => {
    const component = shallow(<Filter {...props2} />)

    expect(component).toMatchSnapshot()
  })
})
