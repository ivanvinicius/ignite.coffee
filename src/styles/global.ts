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
    width: '100%',
    minHeight: '100vh',
    WebkitFontSmoothing: 'antialiased',
    backgroundColor: '$background',
    color: '$text'
  },

  'body, input, button, textarea': {
    fontFamily: '$roboto',
    fontWeight: '$400',
    fontSize: '$16',
    lineHeight: '0'
  },

  html: {
    '@tablet': {
      fontSize: '87.5%'
    }
  }
})
