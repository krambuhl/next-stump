import React from 'react'
import classnames from 'classnames'
import Link from 'next/link'
import { Logo, Wrapper } from 'Components'
import styles from './styles.css'

const GlobalHeader = ({
  dark = false,
  className,
  ...attrs
}) => {
  const classList = classnames(styles.root, { [styles.dark]: dark }, className)

  return (
    <header className={classList} {...attrs}>
      <Wrapper>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <Link href='/'><a className={styles.logoLink}>
              <Logo dark={dark} />
            </a></Link>
          </div>

          <div className={styles.nav}>
            <ul className={styles.navList}>
              <li><Link href='/#portfolio'><a className={classnames(styles.navLink, styles.navLink__portfolio)}>Portfolio</a></Link></li>
              <li><Link href='/#hello'><a className={classnames(styles.navLink, styles.navLink__contact)}>Say Hello</a></Link></li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </header>
  )
}

export default GlobalHeader
