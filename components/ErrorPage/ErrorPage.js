import React from 'react'
import { PageLayout } from 'Components'
import { Wrapper } from 'Tags'

const ErrorPage = ({
  statusCode
}) => (
  <PageLayout error dark>
    <Wrapper className='ErrorPage'>
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
