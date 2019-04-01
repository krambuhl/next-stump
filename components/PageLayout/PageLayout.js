import React from 'react'
import classnames from 'classnames'
import { GlobalFooter, GlobalHeader } from 'Components'
import styles from './styles.css'

const PageLayout = ({
  error = false,
  dark = false,
  children
}) => {
  const classList = classnames(
    { [styles.error]: error },
    { [styles.dark]: dark },
  )

  return (
    <div className={classList}>
      <div className={styles.container}>
        <GlobalHeader dark={dark} />

        <div id='content'>
          {children}
        </div>

        <GlobalFooter dark={dark} />
      </div>
    </div>
  )
}

export default PageLayout
