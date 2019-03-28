import React from 'react'
import classnames from 'classnames'
import styles from './styles.css'

const Wrapper = ({
  size = 'shell',
  className,
  children,
  ...attrs
}) => {
  const classList = classnames(styles.root, styles[`size__${size}`], className)

  return (
    <React.Fragment>
      <div className={classList} {...attrs}>{children}</div>
    </React.Fragment>
  )
}

export default Wrapper
