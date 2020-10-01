import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../src/helpers/theme'

export const EmotionThemeProvider = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)
