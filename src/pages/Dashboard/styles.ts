import { styled } from '../../styles/theme'
import Background from '../../assets/background.svg'

export const Billboard = styled('div', {
  padding: '$64 $16',
  width: '100%',
  minHeight: '544px',
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',

  '@tablet': {
    padding: '$64 0'
  }
})

export const Brand = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@tablet': {
    img: {
      display: 'none'
    }
  }
})

export const Greetings = styled('div', {
  width: '100%',
  maxWidth: '588px',

  h1: {
    fontFamily: '$nunito',
    fontSize: '$48',
    lineHeight: '$130',
    color: '$title',
    fontWeight: '$900'
  },

  '>span': {
    display: 'block',
    marginTop: '$16',
    fontSize: '$20',
    color: '$subtitle',
    lineHeight: '$130'
  }
})

export const Badges = styled('div', {
  marginTop: '$64',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: '1fr 1fr',
  rowGap: '$24',
  columnGap: '$40',

  '@tablet': {
    marginTop: '$32',
    display: 'flex',
    flexDirection: 'column'
  }
})

export const CafesContainer = styled('div', {
  marginTop: '$32',
  display: 'flex',
  padding: '0 0 0 $16',

  h3: {
    fontSize: '$32',
    fontFamily: '$nunito',
    fontWeight: '$900',
    color: '$subtitle',
    lineHeight: '$130'
  },

  '@tablet': {
    padding: '0'
  }
})

export const List = styled('div', {
  marginTop: '20px',
  width: '100%',

  '@tablet': {
    width: '105.4%'
  }
})
