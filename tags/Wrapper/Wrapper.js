import React from 'react'
import classnames from 'classnames'

const Wrapper = ({
  size = 'shell',
  className,
  children,
  ...attrs
}) => {
  const classList = classnames('Wrapper', `Wrapper--${size}`, className)

  return <div className={classList} {...attrs}>{children}</div>
}

export default Wrapper
