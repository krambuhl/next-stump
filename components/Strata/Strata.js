import React from 'react'
import classnames from 'classnames'
import styles from './styles.css'

const Strata = ({
  className,
  children,
  ...attrs
}) => {
  const classList = classnames(styles.root, className)

  return (
    <section className={classList} {...attrs}>
      <div className={styles.container}>{children}</div>
    </section>
  )
}

export default Strata
