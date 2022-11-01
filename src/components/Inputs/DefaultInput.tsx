import { useFormContext } from 'react-hook-form'
import { InputHTMLAttributes } from 'react'

import { InputContainer } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  hasGridArea?: boolean
}

export function DefaultInput({
  name,
  type,
  hasGridArea = false,
  ...rest
}: Props) {
  const { register } = useFormContext()
  const gridArea = hasGridArea ? name : ''
  const valueAsNumber = type === 'number'

  return (
    <InputContainer
      id={gridArea}
      {...register(name, { valueAsNumber })}
      {...rest}
      type={type}
    />
  )
}
