import { styled } from '../../styles/theme'

export const LayoutGridContainer = styled('div', {
  width: '100%',
  maxWidth: '1120px',
  margin: '0 auto',
  // background: 'rgba(255, 0, 255, 0.03)',

  '@tablet': {
    width: '90%'
  }
})
