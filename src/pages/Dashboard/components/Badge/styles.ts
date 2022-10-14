import { styled } from '../../../../styles/theme'

export const BadgeContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$12',

  span: {
    display: 'block',
    lineHeight: '$130'
  }
})

export const Ollipse = styled('div', {
  width: '2rem',
  height: '2rem',
  borderRadius: '$full',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$background',

  variants: {
    bgColor: {
      yellowDark: {
        backgroundColor: '$yellowDark'
      },
      yellow: {
        backgroundColor: '$yellow'
      },
      text: {
        backgroundColor: '$text'
      },
      purple: {
        backgroundColor: '$purple'
      }
    }
  }
})
