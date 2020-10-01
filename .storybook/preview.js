import React from 'react'
import { addDecorator } from '@storybook/react'
import { EmotionThemeProvider } from './decorators'
import GlobalStyles from '../src/components/shared/Layout/GlobalStyle'

// Global Styles ==============================
addDecorator(story => (
  <>
    <GlobalStyles />
    <div style={{ padding: '2rem' }}>{story()}</div>
  </>
))

// Emotion Theme Provider =====================
addDecorator(EmotionThemeProvider)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

const noop = () => {}

global.__BASE_PATH__ = ''
global.___loader = {
  enqueue: noop,
  hovering: noop
}
