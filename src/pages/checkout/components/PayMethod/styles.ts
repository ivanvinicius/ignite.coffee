import { styled } from '../../../../styles/theme'

export const PayMethodContainer = styled('section', {
  marginTop: '$12',
  width: '100%',
  maxWidth: '640px',
  padding: '$40',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '$6',
  backgroundColor: '$card'
})

export const Heading = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '$8',

  svg: {
    color: '$purple'
  },

  h3: {
    fontWeight: '$400',
    color: '$subtitle',
    fontSize: '$16',
    lineHeight: '$130'
  },

  span: {
    fontSize: '$14',
    lineHeight: '$130'
  }
})

export const OptionToPay = styled('div', {
  marginTop: '$32',
  display: 'flex',
  gap: '$12'
})

export const PayLike = styled('div', {
  padding: '$16',
  gap: '$12',
  backgroundColor: '$button',
  borderRadius: '$6',
  boxShadow: '0 0 0 2px #E6E5E5',
  cursor: 'pointer',
  transition: 'all .2s',

  'input[type=radio]': {
    opacity: '0',
    position: 'absolute'
  },

  '&:has(input[type=radio]:checked)': {
    color: '$purple',
    backgroundColor: '$purpleLight',
    boxShadow: '0 0 0 2px #8047F8'
  },

  label: {
    cursor: 'inherit',
    display: 'flex',
    gap: '$12',
    alignItems: 'center',
    justifyContent: 'center',

    svg: {
      color: '$purple'
    },

    span: {
      textTransform: 'uppercase',
      fontSize: '$12'
    }
  },

  '&:hover': {
    backgroundColor: '$hover',
    boxShadow: '0 0 0 2px #D7D5D5'
  }
})
