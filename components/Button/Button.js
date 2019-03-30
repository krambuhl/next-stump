import React from 'react'
import classnames from 'classnames'
import Spinner from 'react-svg-spinner';
import styles from './styles.css'

export default ({
  tagName,
  href,
  variant = 'outline',
  isLoading = false,
  className,
  children,
  ...attrs
}) => {
  const Tag = tagName || href ? 'a' : 'button'
  const classList = classnames(
    styles.root,
    styles[variant],
    className
  )

  if (href) {
    attrs.href = href
  }

  return (
    <React.Fragment>
      <Tag className={classList} {...attrs}>
        { isLoading
          ? <div className={styles.spinner}><Spinner color='white' /></div>
          : children
        }
      </Tag>
    </React.Fragment>
  )
}
