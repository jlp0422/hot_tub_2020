import { ThemeProvider } from 'emotion-theming'
import React from 'react'
import theme from '../../../helpers/theme'

const ThemeWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default ThemeWrapper
