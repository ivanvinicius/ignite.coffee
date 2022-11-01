import { styled } from '../../styles/theme'

export const InputContainer = styled('input', {
  width: '100%',
  height: '2.5rem',
  padding: '$12',
  display: 'flex',
  border: 'none',
  borderRadius: '$4',
  fontSize: '$14',
  outline: 'transparent',
  backgroundColor: '$input',
  boxShadow: '0 0 0 2px #E6E5E5',
  transition: 'box-shadow .2s',

  '&::placeholder': {
    color: '$label'
  },

  '&:focus': {
    boxShadow: '0 0 0 2px #C47F17'
  },

  '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: '0;'
  },

  /* Firefox */
  '&[type=number]': {
    MozAppearance: 'textfield'
  }
})
