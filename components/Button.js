import React from 'react'
import classnames from 'classnames'
import * as Breakpoints from 'Vars/breakpoints'

export default ({
  tagName,
  href,
  variant = '',
  className,
  children,
  ...attrs
}) => {
  const Tag = tagName || href ? 'a' : 'button'
  const classList = classnames('root', `variant--${variant}`, className)

  if (href) {
    attrs.href = href
  }

  return (
    <React.Fragment>
      <Tag className={classList} {...attrs}>{children}</Tag>
      <style jsx>{`
        .root {
          border: 2px solid var(--color-portfolio);
          border-radius: 4em;
          color: var(--color-portfolio) !important;
          display: inline-block;
          font-size: 0.75em;
          text-decoration: none;
          padding: 0em 1.5em;

          &:hover,
          &:focus {
            background-color: var(--color-portfolio);
            color: var(--color-white) !important;
          }

          @media (${Breakpoints.medium}) {
            border-width: 3px;
          }
        }
      `}</style>
    </React.Fragment>
  )
}
