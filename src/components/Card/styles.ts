import { styled } from '../../styles/theme'

export const CardContainer = styled('div', {
  padding: '0 $16 $16',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  flexShrink: '0',
  width: '256px',
  height: '310px',
  borderRadius: '$6 $36 $6 $36',
  background: '$card',
  scrollSnapAlign: 'start',
  scrollSnapStop: 'normal'
})

export const CupImage = styled('img', {
  position: 'relative',
  top: '-20px',
  width: '120px',
  height: '120px'
})

export const ExtraBadgesContainer = styled('div', {
  marginTop: '$4',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$4'
})

export const Infos = styled('div', {
  marginTop: '$16',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$8',

  strong: {
    fontSize: '$20',
    fontWeight: '$900',
    lineHeight: '$130',
    color: '$subtitle'
  },

  span: {
    display: 'block',
    textAlign: 'center',
    fontSize: '$14',
    lineHeight: '$130',
    color: '$label'
  }
})

export const BuyInfos = styled('div', {
  marginTop: '$24',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const Price = styled('div', {
  lineHeight: '$130',

  span: {
    fontSize: '$14'
  },

  strong: {
    marginLeft: '-$4',
    fontSize: '$24',
    fontFamily: '$nunito',
    fontWeight: '$900'
  }
})

export const CartActions = styled('div', {
  display: 'flex',
  alignItems: 'center',
  background: '$button',
  gap: '$4',
  borderRadius: '$6',

  span: {
    color: '$title'
  },

  button: {
    padding: '$12 $8',
    border: 'none',
    cursor: 'pointer',
    lineHeight: '0',
    color: '$purple',
    background: 'transparent',
    transition: 'color .2s',

    '&:hover': {
      color: '$purpleDark'
    }
  }
})

export const Cart = styled('div', {
  padding: '$8',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$6',
  color: '$background',
  backgroundColor: '$purple',
  lineHeight: '0',
  transition: 'background-color .2s',

  '&:hover': {
    backgroundColor: '$purpleDark'
  }
})
