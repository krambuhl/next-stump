import React from 'react'
import classnames from 'classnames'

export default ({
  tagName,
  href,
  variant = '',
  className,
  children,
  ...attrs
}) => {
  const Tag = tagName || href ? 'a' : 'button'
  const classList = classnames('Button', `Button--${variant}`, className)

  if (href) {
    attrs.href = href
  }

  return <Tag className={classList} {...attrs}>{children}</Tag>
}
