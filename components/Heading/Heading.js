import React from 'react'
import classnames from 'classnames'
import styles from './styles.css'

export default ({
  tagName,
  level = 'h1',
  className,
  children,
  ...attrs
}) => {
  const Tag = tagName || level
  const classList = classnames(styles.root, styles[`level__${level}`], className)

  return (
    <React.Fragment>
      <Tag className={classList} {...attrs}>{children}</Tag>
    </React.Fragment>
  )
}
