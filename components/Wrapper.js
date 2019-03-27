import React from 'react'
import classnames from 'classnames'

const Wrapper = ({
  size = 'shell',
  className,
  children,
  ...attrs
}) => {
  const classList = classnames('root', `size--${size}`, className)

  return (
    <React.Fragment>
      <div className={classList} {...attrs}>{children}</div>
      <style jsx>{`
        .root {
          margin: auto;
          padding-left: var(--padding-responsive);
          padding-right: var(--padding-responsive);
        }

        .size--shell {
          max-width: 1440px;
        }
      `}</style>
    </React.Fragment>
  )
}

export default Wrapper
