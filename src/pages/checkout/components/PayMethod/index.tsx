import { CurrencyDollarSimple, CreditCard, Bank, Money } from 'phosphor-react'
import { useState } from 'react'

import { PayMethodContainer, Heading, OptionToPay, PayLike } from './styles'

const payMethods = [
  {
    slug: 'credit',
    label: 'Cartão de Crédito',
    icon: CreditCard
  },
  {
    slug: 'debit',
    label: 'Cartão de Débito',
    icon: Bank
  },
  {
    slug: 'cash',
    label: 'Dinheiro',
    icon: Money
  }
]
export function PayMethod() {
  const [selectedMethod, setSelectedMethod] = useState('credit')

  return (
    <PayMethodContainer>
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
        {payMethods.map(({ slug, label, icon: Icon }) => (
          <PayLike key={slug} title={`Pagar com ${label}`}>
            <input
              id={slug}
              value={slug}
              checked={slug === selectedMethod}
              onChange={(e) => setSelectedMethod(String(e.target.value))}
              type="radio"
            />
            <label htmlFor={slug}>
              <Icon size={16} weight="regular" />
              <span>{label}</span>
            </label>
          </PayLike>
        ))}
      </OptionToPay>
    </PayMethodContainer>
  )
}
