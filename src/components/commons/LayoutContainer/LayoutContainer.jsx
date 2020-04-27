import React from 'react'
import PropTypes from 'prop-types'
import { Animated } from 'react-animated-css'
import ButtonBack from '../ButtonBack'
import styles from './layoutContainer.scss'

const LayoutContainer = ({ title, rolText, children, handleBack, viewButtonBack, textButton }) => {
  return (
    <Animated
      animationIn="fadeIn"
      animationOut="fadeInUp"
      animationInDelay={1000}
      animationInDuration={500}
    >
      <div className={styles.containerLayout}>
        {viewButtonBack && <ButtonBack text={textButton} handleClick={handleBack} />}
        <div className={styles.title}>{title}</div>
        <div className={styles.rolText}>{rolText}</div>
        {children}
      </div>
    </Animated>
  )
}

LayoutContainer.propTypes = {
  children: PropTypes.node.isRequired,
  handleBack: PropTypes.func,
  title: PropTypes.string,
  textButton: PropTypes.string,
  viewButtonBack: PropTypes.bool,
}

LayoutContainer.defaultProps = {
  textButton: '',
  title: '',
  handleBack: null,
  viewButtonBack: false,
}

export default LayoutContainer
