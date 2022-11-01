import { styled } from '../../../../styles/theme'

export const AddressContainer = styled('div', {
  marginTop: '$16',
  padding: '$40',
  width: '100%',
  maxWidth: '640px',
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
    color: '$yellow'
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

export const Grid = styled('div', {
  marginTop: '$32',
  width: '100%',
  display: 'grid',
  gap: '$16 $12',
  gridTemplateColumns: '1fr 2fr 60px',
  gridTemplateRows: 'repeat(4, 1fr)',
  gridTemplateAreas:
    "'zipCode none none'" +
    "'street street street'" +
    "'number complement complement'" +
    "'district city uf'",

  '#zipCode': { gridArea: 'zipCode' },
  '#street': { gridArea: 'street' },
  '#number': { gridArea: 'number' },
  '#complement': { gridArea: 'complement' },
  '#district': { gridArea: 'district' },
  '#city': { gridArea: 'city' },
  '#uf': { gridArea: 'uf' }
})
