import 'raf/polyfill'

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

require('dotenv').config()

Enzyme.configure({ adapter: new Adapter() })

const globals = require('../src/globals')

Object.keys(globals).forEach(key => (global[key] = globals[key]))
