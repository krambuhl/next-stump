import React from 'react'
import classnames from 'classnames'

const Logo = ({
  className,
  children,
  ...attrs
}) => {
  const classList = classnames('Logo', className)

  return (
    <div className={classList} {...attrs}>
      <img src='/static/brand.svg' />
    </div>
  )
}

export default Logo
