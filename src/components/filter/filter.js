import React from 'react'
import PropTypes from 'prop-types'
import { generate } from 'shortid'
import classnames from 'classnames'

import options from '../../../mocks/filter.json'
import styles from './filter.scss'

const Filter = ({ selectedFilter, selectFilter }) => (
  <div className={styles.wrapper}>
    <select
      className={classnames(styles.select, styles[`select--${selectedFilter}`])}
      onChange={selectFilter}
      value={selectedFilter}
    >
      {options.map(item => (
        <option value={item.value} key={`option--${generate()}`}>
          {item.label}
        </option>
      ))}
    </select>
  </div>
)

Filter.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  selectFilter: PropTypes.func.isRequired,
}

export default Filter
