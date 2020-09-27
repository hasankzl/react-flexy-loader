import React from 'react'
import propTypes from "prop-types"
import styles from './styles.module.css'

const positionSelect = {
  top: "0",
  middle: "50%",
  bottom: "100%"
}
const ReactFlexyLoader = ({ show, children, alpha, zIndex, pointerEvents, position }) => {
  return show ? <div className={styles.main} style={{ backgroundColor: `rgba(0,0,0,${alpha})`, zIndex, pointerEvents: pointerEvents ? "none" : "" }}>

    <div className={styles.loader} style={{ top: positionSelect[position], transform: `translate(-50%,-${positionSelect[position]})` }}>
      {
        children ? children :
          <div className={styles.spinner}>
          </div>
      }
    </div>
  </div> : null
}


ReactFlexyLoader.defaultProps = {
  show: true,
  absolute: false,
  alpha: 0.3,
  zIndex: 50,
  pointerEvents: true,
  position: "middle"
}

ReactFlexyLoader.propTypes = {
  show: propTypes.bool,
  absolute: propTypes.bool,
  alpha: propTypes.number,
  zIndex: propTypes.number,
  allowPointerEvents: propTypes.bool,
  position: propTypes.string
}

export default ReactFlexyLoader;
