import { styled } from '../../styles/theme'

export const HeaderContainer = styled('header', {
  width: '100%'
})

export const Nav = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$32 $16'
})

export const Info = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$8'
})

export const Location = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
  padding: '$8',
  borderRadius: '$6',
  backgroundColor: '$purpleLight',
  color: '$purple',
  fontSize: '$14',

  svg: {
    color: '$purple'
  }
})

export const Cart = styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: '$8',
  border: 'none',
  borderRadius: '$6',
  backgroundColor: '$yellowLight',
  cursor: 'pointer',

  svg: {
    color: '$yellowDark'
  }
})
