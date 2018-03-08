import React from 'react'
import PropTypes from 'prop-types'

import styles from './tronche.scss'

const Tronche = ({ src, defaultSrc, gender }) => {
  let img

  return (
    <div
      className={`${styles.wrapper} ${gender === 'male' && styles.male}  ${gender === 'female' &&
        styles.female}`}
    >
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
  gender: PropTypes.string,
}

Tronche.defaultProps = {
  gender: '',
}

export default Tronche
