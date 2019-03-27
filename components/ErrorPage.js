import React from 'react'
import { PageLayout, Wrapper } from 'Components'

const ErrorPage = ({
  statusCode
}) => (
  <PageLayout error dark>
    <Wrapper className='root'>
      <div>
        {
          statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'
        }
      </div>
    </Wrapper>
    <style jsx>{`
      .root {
        display: flex;
        align-items: center;
        min-height: 90vh;
        width: 100%;
      }

      div {
        text-align: center;
        width: 100%;
      }
    `}</style>
  </PageLayout>
)

export default ErrorPage
