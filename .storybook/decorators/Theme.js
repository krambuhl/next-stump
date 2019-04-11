import React, { useEffect } from 'react';
import ThemeContext from 'Context/ThemeContext'

const ThemeWrapper = ({
  dark = false,
  error = false,
  children
}) => {
  useEffect(() => {
    if (dark) {
      document.body.classList.add('theme-dark')
    }

    return () => {
      document.body.classList.remove('theme-dark')
    }
  })

  return (
    <ThemeContext.Provider value={{ themeDark: dark, themeError: error }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeWrapper
