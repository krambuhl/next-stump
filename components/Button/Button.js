import React from 'react'
import classnames from 'classnames'
import styles from './styles.css'

export default ({
  tagName,
  href,
  variant = 'outline',
  className,
  children,
  ...attrs
}) => {
  const Tag = tagName || href ? 'a' : 'button'
  const classList = classnames(styles.root, styles[variant], className)

  if (href) {
    attrs.href = href
  }

  return (
    <React.Fragment>
      <Tag className={classList} {...attrs}>{children}</Tag>
    </React.Fragment>
  )
}
