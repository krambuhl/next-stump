import React from 'react'
import { PageLayout, Wrapper } from 'Components'
import styles from './styles.css'

const ErrorPage = ({
  statusCode
}) => (
  <PageLayout error dark>
    <Wrapper className={styles.root}>
      <div>
        {
          statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'
        }
      </div>
    </Wrapper>
  </PageLayout>
)

export default ErrorPage
