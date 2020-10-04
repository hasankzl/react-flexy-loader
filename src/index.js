import React from 'react'
import propTypes from 'prop-types'
import styles from './styles.module.css'

const locationSelect = {
  top: '0',
  middle: '50%',
  bottom: '100%'
}
const ReactFlexyLoader = ({
  show,
  children,
  alpha,
  zIndex,
  pointerEvents,
  location,
  position
}) => {
  return show ? (
    <div
      className={styles.main}
      style={{
        backgroundColor: `rgba(0,0,0,${alpha})`,
        zIndex,
        pointerEvents: pointerEvents ? 'none' : '',
        position
      }}
    >
      <div
        className={styles.loader}
        style={{
          top: locationSelect[location],
          transform: `translate(-50%,-${locationSelect[location]})`
        }}
      >
        {children ? children : <div className={styles.spinner} />}
      </div>
    </div>
  ) : null
}

ReactFlexyLoader.defaultProps = {
  show: true,
  alpha: 0.3,
  zIndex: 99,
  pointerEvents: true,
  location: 'middle'
}

ReactFlexyLoader.propTypes = {
  show: propTypes.bool,
  absolute: propTypes.bool,
  alpha: propTypes.number,
  zIndex: propTypes.number,
  pointerEvents: propTypes.bool,
  location: propTypes.string,
  position: propTypes.string
}

export default ReactFlexyLoader
