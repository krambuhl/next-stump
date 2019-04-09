import React from 'react'
import classnames from 'classnames'
import { GlobalFooter, GlobalHeader } from 'Components'
import styles from './styles.css'


class PageLayout extends React.Component {
  updateBodyTheme (isDark) {
    document.body.classList[isDark ? 'add' : 'remove']('theme-dark')
  }

  componentDidUpdate () {

  }

  render () {
    const {
      error = false,
      dark = false,
      children
    } = this.props
    const classList = classnames({
      [styles.error]: error,
      [styles.dark]: dark
    })

    return (
      <div className={classList}>
        <div className={styles.container}>
          <GlobalHeader
            className={styles.header}
            dark={dark}
            error={error}
          />

          <div id='content' className={styles.main}>
            {children}
          </div>

          <GlobalFooter
            className={styles.footer}
            dark={dark}
            error={error}
          />
        </div>
      </div>
    )
  }
}

export default PageLayout
