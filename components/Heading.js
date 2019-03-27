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
  const classList = classnames('root', `level--${level}`, className)

  return (
    <React.Fragment>
      <Tag className={classList} {...attrs}>{children}</Tag>
      <style jsx>{`
        .root {
          font-weight: 900;
          line-height: 1.4em;
        }

        .level--h1 {
          font-size: responsive 1.8em 3em;
          font-range: 12em 40em;
          line-height: 1.1em;
        }

        .level--h2 {
          font-size: responsive 1.6em 2.8em;
          font-range: 12em 40em;
        }

        .level--h3 {
          font-size: 1.6em;
          line-height: 1.2em;
        }

        .level--h4 { font-size: 1.7em; }
        .level--h5 { font-size: 1.4em; }
        .level--h6 { font-size: 1.2em; }
      `}</style>
    </React.Fragment>
  )
}
