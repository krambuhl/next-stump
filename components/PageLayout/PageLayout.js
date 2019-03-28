import React from 'react'
import classnames from 'classnames'
import { GlobalHeader } from 'Components'
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
      </div>
    </div>
  )
}

export default PageLayout
