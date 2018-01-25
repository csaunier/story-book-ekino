import React from 'react'
import PropTypes from 'prop-types'

import styles from './tronche.scss'

const Tronche = ({ src, defaultSrc }) => {
  let img

  return (
    <div className={styles.wrapper}>
      <img
        alt="#"
        src={src}
        ref={ref => {
          img = ref
        }}
        onError={() => {
          img.src = defaultSrc
        }}
      />
    </div>
  )
}

Tronche.propTypes = {
  src: PropTypes.string.isRequired,
  defaultSrc: PropTypes.string.isRequired,
}

export default Tronche
