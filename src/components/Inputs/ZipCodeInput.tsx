import { useFormContext } from 'react-hook-form'
import { FormEvent, InputHTMLAttributes } from 'react'

import { InputContainer } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  hasGridArea?: boolean
}

export function ZipCodeInput({ name, hasGridArea = false, ...rest }: Props) {
  const { register } = useFormContext()
  const gridArea = hasGridArea ? name : ''

  function handleNormalizeZipCode(event: FormEvent<HTMLInputElement>) {
    event.currentTarget.maxLength = 9

    const formatted = event.currentTarget.value
      .replace(/\D/g, '')
      .replace(/^(\d{5})(\d)/, '$1-$2')

    event.currentTarget.value = formatted
  }

  return (
    <InputContainer
      id={gridArea}
      {...register(name)}
      {...rest}
      onKeyUp={handleNormalizeZipCode}
    />
  )
}
