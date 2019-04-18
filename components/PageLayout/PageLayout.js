import React, { useEffect } from 'react'
import classnames from 'classnames'
import { PageTransition } from 'next-page-transitions'
import ThemeContext from 'Context/ThemeContext'
import { GlobalFooter, GlobalHeader } from 'Components'
import styles from './styles.css'

const PageLayout = ({
  error: themeError,
  dark: themeDark,
  currentRoute,
  children
}) => {
  useEffect(() => {
    if (themeDark) {
      document.body.classList.add('theme-dark')
    }

    return () => {
      document.body.classList.remove('theme-dark')
    }
  })

  const classList = classnames({
    [styles.error]: themeError,
    [styles.dark]: themeDark
  })

  return (
    <ThemeContext.Provider value={{ themeError, themeDark }}>
      <div className={classList}>
        <div className={styles.container}>
          <GlobalHeader className={styles.header} />

          <PageTransition
            timeout={300}
            classNames="page-transition"
          >
            <div
              key={currentRoute}
              id='content'
              className={styles.main}
            >
              {children}
            </div>
          </PageTransition>

          <GlobalFooter className={styles.footer} />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default PageLayout
