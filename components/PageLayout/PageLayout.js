import React from 'react'
import classnames from 'classnames'
import { GlobalHeader } from 'Components'

const PageLayout = ({
  error = false,
  dark = false,
  children
}) => {
  const classList = classnames(
    'PageLayout',
    { 'PageLayout--error': error },
    { 'PageLayout--dark': dark },
  )

  return (
    <div className={classList}>
      <GlobalHeader />

      <div id='content'>
        {children}
      </div>
    </div>
  )
}

export default PageLayout
