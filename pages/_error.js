import React from 'react'
import { ErrorPage } from 'Components'

const ErrorComponent = ({ statusCode }) => (
  <ErrorPage statusCode={statusCode} />
)

ErrorComponent.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode }
}

export default ErrorComponent
