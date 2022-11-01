import { useCallback, useState } from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'

import { LayoutGrid } from '../../components/LayoutGrid'

import { Address } from './components/Address'
import { Payment } from './components/Payment'
import { Form, SectionTitle } from './styles'

const addressSchema = z.object({
  zipCode: z
    .string()
    .min(8, 'CEP deve conter 8 números')
    .max(8, 'CEP deve conter 8 números'),
  street: z.string().min(1, 'Informe a Rua'),
  number: z.number(),
  complement: z.string().optional(),
  district: z.string().min(1, 'Infome o Bairro'),
  city: z.string().min(1, 'Informe a Cidade'),
  uf: z
    .string()
    .min(2, 'UF deve conter 2 caractéres')
    .max(2, 'UF deve conter 2 caractéres')
})

type AddressData = z.infer<typeof addressSchema>

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('')

  const formContext = useForm<AddressData>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      zipCode: '',
      street: '',
      number: undefined,
      complement: '',
      district: '',
      city: '',
      uf: ''
    }
  })
  const { handleSubmit } = formContext

  function handleFinishOrder(data: AddressData) {
    console.log(data)
  }

  const handleChangePayment = useCallback((method: string) => {
    setPaymentMethod(method)
  }, [])

  return (
    <main>
      <LayoutGrid>
        <Form onSubmit={handleSubmit(handleFinishOrder)}>
          <FormProvider {...formContext}>
            <div>
              <SectionTitle>Complete seu pedido</SectionTitle>
              <Address />
              <Payment
                paymentLike={paymentMethod}
                onChangePayment={handleChangePayment}
              />
            </div>

            <button type="submit">Finalizar pedido</button>
          </FormProvider>
        </Form>
      </LayoutGrid>
    </main>
  )
}
