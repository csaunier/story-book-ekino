import React, { PureComponent } from 'react'

import random from 'lodash/random'
import { Motion, spring } from 'react-motion'
import { Helmet } from 'react-helmet'
import { translate } from 'react-i18next'

import ekinoLogo from 'assets/img/ekino.png'

import styles from './styles.scss'

const mySpring = value => spring(value, { stiffness: 100, damping: 50 })
const getRgb = ({ r, g, b }) => `rgb(${parseInt(r, 10)}, ${parseInt(g, 10)}, ${parseInt(b, 10)})`

class Home extends PureComponent {
  state = {
    r: 0,
    g: 0,
    b: 0,
    x: 0,
    y: 0,
  }

  componentDidMount() {
    this.setAnimationValues()
  }

  componentWillUnmount() {
    clearTimeout(this._timeout)
  }

  setAnimationValues(delay = 0) {
    this._timeout = setTimeout(
      () =>
        window.requestAnimationFrame(() => {
          this.setState({
            r: random(0, 255),
            g: random(0, 255),
            b: random(0, 255),
            x: random(-10, 10),
            y: random(-10, 10),
          })

          this.setAnimationValues(random(100, 500))
        }),
      delay,
    )
  }

  _timeout = null

  render() {
    const { t } = this.props
    const { r, g, b, x, y } = this.state

    return [
      <Helmet key="helmet">
        <title>{t('menu.home')}</title>
      </Helmet>,
      <div key="content" className={styles.home}>
        <Motion
          style={{
            r: mySpring(r),
            g: mySpring(g),
            b: mySpring(b),
            x: mySpring(x),
            y: mySpring(y),
          }}
        >
          {m => (
            <div
              className={styles.home__logo}
              style={{
                backgroundColor: getRgb({ r: m.r, g: m.g, b: m.b }),
                transform: `translate3d(${m.x}px, ${m.y}px, 0)`,
              }}
            >
              <img src={ekinoLogo} alt="Ekino" />
            </div>
          )}
        </Motion>
      </div>,
    ]
  }
}

export default translate()(Home)
