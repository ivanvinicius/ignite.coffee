import { createStitches } from '@stitches/react'

export const { styled, globalCss } = createStitches({
  media: {
    tablet: '(max-width: 980px)'
  },

  theme: {
    fonts: {
      roboto: 'Roboto, sans-serif',
      nunito: 'Nunito, sans-serif'
    },

    fontSizes: {
      10: '0.625rem',
      12: '0.75rem',
      14: '0.875rem',
      16: '1rem',
      18: '1.125rem',
      20: '1.25rem',
      24: '1.5rem',
      32: '2rem',
      48: '3rem'
    },

    fontWeights: {
      400: 400,
      700: 700,
      900: 900
    },

    lineHeights: {
      130: '130%',
      160: '160%'
    },

    colors: {
      yellowLight: '#F1E9C9',
      yellow: '#DBAC2C',
      yellowDark: '#C47F17',

      purpleLight: '#EBE5F9',
      purple: '#8047F8',
      purpleDark: '#4B2995',

      title: '#272221',
      subtitle: '#403937',
      text: '#574F4D',
      label: '#8D8686',
      hover: '#D7D5D5',
      button: '#E6E5E5',
      input: '#EDEDED',
      card: '#F3F2F2',
      background: '#FAFAFA',
      white: '#FFFFFF'
    },

    space: {
      4: '0.25rem',
      8: '0.5rem',
      12: '0.75rem',
      16: '1rem',
      24: '1.5rem',
      32: '2rem',
      40: '2.5rem',
      64: '4rem'
    },

    radii: {
      6: '6px',
      36: '36px',
      full: '999px'
    }
  }
})
