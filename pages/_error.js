import React from 'react'
import { ErrorPage } from 'Components'

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return (
      <ErrorPage statusCode={this.props.statusCode} />
    )
  }
}
