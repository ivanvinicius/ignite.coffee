import { InputHTMLAttributes } from 'react'

import { InputContainer } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  gridArea?: string
}
export function Input({ gridArea = '', ...rest }: Props) {
  const hasGridArea = gridArea && gridArea

  return <InputContainer id={hasGridArea} {...rest} />
}
