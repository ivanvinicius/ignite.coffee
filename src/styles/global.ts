import { globalCss } from './theme'

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  ':focus': {
    outline: 'transparent',
    boxShadow: '0 0 0 2px #C47F17',
    borderRadius: '$6'
  },

  body: {
    width: '100vw',
    minHeight: '100vh',
    color: '$text',
    backgroundColor: '$background',
    WebkitFontSmoothing: 'antialiased'
  },

  'body, input, button, textarea': {
    fontFamily: '$roboto',
    fontWeight: '$400',
    fontSize: '$16'
  },

  html: {
    '@tablet': {
      fontSize: '87.5%'
    }
  }
})
