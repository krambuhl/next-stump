import React from 'react'
import classnames from 'classnames'
import ThemeContext from 'Context/ThemeContext'
import { GlobalFooter, GlobalHeader } from 'Components'
import styles from './styles.css'


class PageLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      themeError: props.error,
      themeDark: props.dark
    }
  }

  componentDidMount () {
    if (this.props.dark) {
      document.body.classList.add('theme-dark')
    }
  }

  componentWillUnmount () {
    document.body.classList.remove('theme-dark')
  }

  render () {
    const { children } = this.props
    const classList = classnames({
      [styles.error]: this.state.themeError,
      [styles.dark]: this.state.themeDark
    })

    return (
      <ThemeContext.Provider value={this.state}>
        <div className={classList}>
          <div className={styles.container}>
            <GlobalHeader className={styles.header} />

            <div id='content' className={styles.main}>
              {children}
            </div>

            <GlobalFooter className={styles.footer} />
          </div>
        </div>
      </ThemeContext.Provider>
    )
  }
}

export default PageLayout
