import React from 'react'
import classnames from 'classnames'
import { withTheme } from 'Context/ThemeContext'
import { Wrapper } from 'Components'
import styles from './styles.css'

const GlobalFooter = ({
  themeDark = false,
  themeError = false,
  className
}) => {
  const classList = classnames(styles.root, {
    [styles.dark]: themeDark,
    [styles.error]: themeError,
  }, className)

  return (
    <footer className={classList}>
      <Wrapper>
        <div className={styles.wrapper}>
          <div className={styles.notes}>View the <a href="https://github.com/krambuhl/next-stump">Source Code</a> or <a href="/styleguide/">Component Library</a> for this website</div>

          <div className={styles.social}>
            <a href='https://github.com/krambuhl' target='_blank' rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32.6 31.8"><title>Github</title><path d="M16.3 0C7.3 0 0 7.3 0 16.3c0 7.2 4.7 13.3 11.1 15.5.8.1 1.1-.4 1.1-.8v-2.8c-4.5 1-5.5-2.2-5.5-2.2-.7-1.9-1.8-2.4-1.8-2.4-1.5-1 .1-1 .1-1 1.6.1 2.5 1.7 2.5 1.7 1.5 2.5 3.8 1.8 4.7 1.4.1-1.1.6-1.8 1-2.2-3.6-.4-7.4-1.8-7.4-8.1 0-1.8.6-3.2 1.7-4.4-.1-.3-.7-2 .2-4.2 0 0 1.4-.4 4.5 1.7 1.3-.4 2.7-.5 4.1-.5 1.4 0 2.8.2 4.1.5 3.1-2.1 4.5-1.7 4.5-1.7.9 2.2.3 3.9.2 4.3 1 1.1 1.7 2.6 1.7 4.4 0 6.3-3.8 7.6-7.4 8 .6.5 1.1 1.5 1.1 3V31c0 .4.3.9 1.1.8 6.5-2.2 11.1-8.3 11.1-15.5C32.6 7.3 25.3 0 16.3 0z" /></svg>
            </a>

            <a href='https://instagram.com/eeveekreevee' target='_blank' rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 503.8 503.8"><title>Instagram</title><path d="M251.9 45.4c67.3 0 75.2.3 101.8 1.5 24.6 1.1 37.9 5.2 46.8 8.7 11.8 4.6 20.2 10 29 18.8s14.3 17.2 18.8 29c3.4 8.9 7.6 22.2 8.7 46.8 1.2 26.6 1.5 34.5 1.5 101.8s-.3 75.2-1.5 101.8c-1.1 24.6-5.2 37.9-8.7 46.8-4.6 11.8-10 20.2-18.8 29s-17.2 14.3-29 18.8c-8.9 3.4-22.2 7.6-46.8 8.7-26.6 1.2-34.5 1.5-101.8 1.5s-75.2-.3-101.8-1.5c-24.6-1.1-37.9-5.2-46.8-8.7-11.8-4.6-20.2-10-29-18.8s-14.3-17.2-18.8-29c-3.4-8.9-7.6-22.2-8.7-46.8-1.2-26.6-1.5-34.5-1.5-101.8s.3-75.2 1.5-101.8c1.1-24.6 5.2-37.9 8.7-46.8 4.6-11.8 10-20.2 18.8-29s17.2-14.3 29-18.8c8.9-3.4 22.2-7.6 46.8-8.7 26.6-1.3 34.6-1.5 101.8-1.5m0-45.4c-68.4 0-77 .3-103.9 1.5-26.8 1.2-45.1 5.5-61.1 11.7-16.6 6.4-30.6 15.1-44.6 29.1-14 14-22.6 28.1-29.1 44.6-6.2 16-10.5 34.3-11.7 61.2C.3 174.9 0 183.5 0 251.9s.3 77 1.5 103.9C2.7 382.6 7 400.9 13.2 417c6.4 16.6 15.1 30.6 29.1 44.6 14 14 28.1 22.6 44.6 29.1 16 6.2 34.3 10.5 61.2 11.7 26.9 1.2 35.4 1.5 103.9 1.5s77-.3 103.9-1.5c26.8-1.2 45.1-5.5 61.2-11.7 16.6-6.4 30.6-15.1 44.6-29.1 14-14 22.6-28.1 29.1-44.6 6.2-16 10.5-34.3 11.7-61.2 1.2-26.9 1.5-35.4 1.5-103.9s-.3-77-1.5-103.9c-1.2-26.8-5.5-45.1-11.7-61.2-6.4-16.6-15.1-30.6-29.1-44.6-14-14-28.1-22.6-44.6-29.1-16-6.2-34.3-10.5-61.2-11.7-27-1.1-35.6-1.4-104-1.4z"/><path d="M251.9 122.6c-71.4 0-129.4 57.9-129.4 129.4s57.9 129.4 129.4 129.4S381.3 323.5 381.3 252s-57.9-129.4-129.4-129.4zm0 213.3c-46.4 0-84-37.6-84-84s37.6-84 84-84 84 37.6 84 84-37.6 84-84 84z"/><circle cx="386.4" cy="117.4" r="30.2"/></svg>
            </a>
          </div>

          <div className={styles.copy}>&copy; 2019 Stumptown Bear</div>

        </div>
      </Wrapper>
    </footer>
  )
}

export default withTheme(GlobalFooter)
