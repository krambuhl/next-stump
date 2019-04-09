import React from 'react'

const ThemeContext = React.createContext({
  themeDark: false,
  themeError: false
})

export default ThemeContext

export const withTheme = Component => props => (
  <ThemeContext.Consumer>
    { (theme) => <Component {...theme} {...props} /> }
  </ThemeContext.Consumer>
)
