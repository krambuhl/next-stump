import React from 'react';
import ThemeContext from 'Context/ThemeContext'

export default class ThemeWrapper extends React.Component {
  componentDidMount () {
    if (this.props.dark) {
      document.body.classList.add('theme-dark')
    }
  }

  componentWillUnmount () {
    document.body.classList.remove('theme-dark')
  }

  render () {
    const {
      dark = false,
      error = false,
      children
    } = this.props

    return (
      <ThemeContext.Provider value={{ themeDark: dark, themeError: error }}>
        {children}
      </ThemeContext.Provider>
    )
  }
}
