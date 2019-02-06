import React from 'react'
import classnames from 'classnames'

const Strata = ({
  className,
  children,
  ...attrs
}) => {
  const classList = classnames('Strata', className)

  return (
    <section className={classList} {...attrs}>
      <div>{children}</div>
    </section>
  )
}

export default Strata
