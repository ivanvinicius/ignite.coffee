import { CurrencyDollarSimple } from 'phosphor-react'

import { methods } from '../../../../utils/methods'

import { PaymentContainer, Heading, OptionToPay, PayLike } from './styles'

interface Props {
  paymentLike: string
  onChangePayment: (method: string) => void
}

export function Payment({ paymentLike, onChangePayment }: Props) {
  return (
    <PaymentContainer>
      <Heading>
        <CurrencyDollarSimple size={22} weight="regular" />
        <div>
          <h3>Pagamento</h3>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </Heading>

      <OptionToPay>
        {methods.map(({ slug, label, icon: Icon }) => (
          <PayLike key={slug} title={`Pagar com ${label}`}>
            <input
              id={slug}
              value={slug}
              checked={slug === paymentLike}
              onChange={() => onChangePayment(slug)}
              type="radio"
            />
            <label htmlFor={slug}>
              <Icon size={16} weight="regular" />
              <span>{label}</span>
            </label>
          </PayLike>
        ))}
      </OptionToPay>
    </PaymentContainer>
  )
}
