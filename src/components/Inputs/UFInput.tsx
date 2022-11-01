import { useFormContext } from 'react-hook-form'
import { FormEvent, InputHTMLAttributes } from 'react'

import { InputContainer } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  hasGridArea?: boolean
}

export function UFInput({ name, hasGridArea = false, ...rest }: Props) {
  const { register } = useFormContext()
  const gridArea = hasGridArea ? name : ''

  function handleNormalizeUF(event: FormEvent<HTMLInputElement>) {
    event.currentTarget.maxLength = 2

    event.currentTarget.value = event.currentTarget.value.toUpperCase()
  }

  return (
    <InputContainer
      id={gridArea}
      {...register(name)}
      {...rest}
      onKeyUp={handleNormalizeUF}
    />
  )
}
