import React from 'react'
import classnames from 'classnames'
import { Heading, PageLayout, Wrapper } from 'Components'
import styles from './styles.css'

const ErrorPage = ({
  statusCode
}) => (
  <PageLayout error dark>
    <Wrapper className={classnames(styles.root, 'u-rhythm')}>
      <Heading>Oh no! {statusCode}</Heading>
      { statusCode === 404
        ? <p>The li<span className={styles.pun}>bear</span>ian couldn&#x27;t find the page you&#x27;re looking for &ndash; he&#x27;s too busy scratching his back.</p>
        : <p>The li<span className={styles.pun}>bear</span>ian has decided to scratch his back instead of run the server, try again friend.</p>
      }
    </Wrapper>
  </PageLayout>
)

export default ErrorPage
