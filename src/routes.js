import Example from 'containers/Example'
import Home from 'containers/Home'

export default [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/example',
    exact: true,
    component: Example,
  },
]
