import { styled } from '../../../styles/theme'

export const ScaledContainer = styled('div', {
  width: '100%',
  position: 'relative'
})

export const ScrollerContainer = styled('div', {
  display: 'flex',
  padding: '$32 0',
  overflowX: 'hidden'
})

export const Scroller = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$32',
  transition: 'margin ease .5s'
})

export const ButtonsContainer = styled('div', {
  margin: '0 $16',
  position: 'absolute',
  top: '-60px',
  right: '0',
  display: 'flex',
  alignItems: 'center',
  gap: '$8'
})

export const ScrollerButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$8',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '$6',
  transition: 'background-color .2s',
  backgroundColor: '$purpleLight',

  svg: {
    color: '$purple'
  },

  '&:disabled': {
    cursor: 'not-allowed',
    backgroundColor: '$card',

    svg: {
      color: '$label'
    }
  }
})
