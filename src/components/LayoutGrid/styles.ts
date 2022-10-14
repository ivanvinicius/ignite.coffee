import { styled } from '../../styles/theme'

export const LayoutGridContainer = styled('div', {
  width: '100%',
  maxWidth: '1120px',
  margin: '0 auto',
  background: 'rgba(155,100,155,1)',

  '@tablet': {
    width: '90%'
  }
})
