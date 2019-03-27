import React from 'react'
import classnames from 'classnames'
import { GlobalHeader } from 'Components'

const PageLayout = ({
  error = false,
  dark = false,
  children
}) => {
  const classList = classnames(
    { 'error': error },
    { 'dark': dark },
  )

  return (
    <div className={classList}>
      <div className="container">
        <GlobalHeader dark={dark} />

        <div id='content'>
          {children}
        </div>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
        }

        .error {
          background-image: url(/static/scratching-bear.gif);
          background-size: cover;
        }

        .error > .container {
          background-color: #0008;
        }

        .dark {
          background-color: var(--color-black);
          color: var(--color-tan);
        }

        .dark :global(a) {
          color: var(--color-tan);
        }
      `}</style>
    </div>
  )
}

export default PageLayout
