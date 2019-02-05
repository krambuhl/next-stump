import React from 'react'
import classnames from 'classnames'

export default ({
  tagName,
  level = 'h1',
  className,
  children,
  ...attrs
}) => {
  const Tag = tagName || level
  const classList = classnames('Heading', `Heading--${level}`, className)

  return <Tag className={classList} {...attrs}>{children}</Tag>
}
