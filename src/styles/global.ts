import { globalCss } from './theme'

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  ':focus': {
    outline: 'transparent',
    boxShadow: '0 0 0 2px #C47F17'
  },

  html: {
    '@tablet': {
      fontSize: '87.5%'
    }
  },

  body: {
    WebkitFontSmoothing: 'antialiased',
    backgroundColor: '$background',
    color: '$text'
  },

  'body, input, button, textarea': {
    fontFamily: '$roboto',
    fontSize: '$16',
    fontWeight: '$regular'
  }
})
