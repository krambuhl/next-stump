import React from 'react'
import classnames from 'classnames'

const Strata = ({
  className,
  children,
  ...attrs
}) => {
  const classList = classnames('root', className)

  return (
    <section className={classList} {...attrs}>
      <div>{children}</div>

      <style jsx>{`
        .root {
          display: flex;
          padding-top: calc(var(--padding-responsive) * 4);
          padding-bottom: calc(var(--padding-responsive) * 5);
          min-height: 100vh;
        }

        div {
          width: 100%;
          text-align: center;
        }
      `}</style>
    </section>
  )
}

export default Strata
