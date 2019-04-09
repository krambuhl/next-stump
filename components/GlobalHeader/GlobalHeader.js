import React from 'react'
import classnames from 'classnames'
import Link from 'next/link'
import { withTheme } from 'Context/ThemeContext'
import { Logo, Wrapper } from 'Components'
import styles from './styles.css'

const GlobalHeader = ({
  themeDark = false,
  themeError = false,
  className
}) => {
  const classList = classnames(styles.root, {
    [styles.dark]: themeDark,
    [styles.error]: themeError
  }, className)

  return (
    <header className={classList}>
      <Wrapper className={styles.wrapper}>
        <div className={styles.logo}>
          <Link href='/'><a className={styles.logoLink}>
            <Logo />
          </a></Link>
        </div>

        <div className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link href='/#portfolio'><a className={classnames(styles.navLink, styles.navLink__portfolio)}>Portfolio</a></Link></li>
            <li><Link href='/#hello'><a className={classnames(styles.navLink, styles.navLink__contact)}>Say Hello</a></Link></li>
          </ul>
        </div>
      </Wrapper>
    </header>
  )
}

export default withTheme(GlobalHeader)
