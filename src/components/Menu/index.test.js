import React from 'react'

import { shallow } from 'enzyme'
import { I18nextProvider } from 'react-i18next'

import i18n from 'i18n'

import Menu from './'

describe('component Menu', () =>
  it('should render', () => {
    const component = shallow(
      <I18nextProvider i18n={i18n}>
        <Menu />
      </I18nextProvider>,
    )

    expect(component).toMatchSnapshot()
  }))
