import { LayoutGrid } from '../../components/LayoutGrid'

import { Address } from './components/Address'
import { PayMethod } from './components/PayMethod'
import { FormContainer, SectionTitle } from './styles'

export function Checkout() {
  return (
    <main>
      <LayoutGrid>
        <FormContainer>
          <div>
            <SectionTitle>Complete seu pedido</SectionTitle>
            <Address />
            <PayMethod />
          </div>
        </FormContainer>
      </LayoutGrid>
    </main>
  )
}
