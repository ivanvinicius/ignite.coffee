import { styled } from '../../styles/theme'

export const LayoutGridContainer = styled('div', {
  width: '100%',
  maxWidth: '1120px',
  margin: '0 auto',
  background: 'rgba(50, 50, 50, 0.03)',

  '@tablet': {
    width: '90%'
  }
})
