import { styled } from '../../styles/theme'

export const LayoutGridContainer = styled('div', {
  width: '100%',
  maxWidth: '1120px',
  margin: '0 auto',
  // background: 'rgba(99, 255, 99, 0.08)',

  '@tablet': {
    width: '90%'
  }
})
