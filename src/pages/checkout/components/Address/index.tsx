import { MapPinLine } from 'phosphor-react'

import { ZipCodeInput } from '../../../../components/Inputs/ZipCodeInput'
import { DefaultInput } from '../../../../components/Inputs/DefaultInput'
import { UFInput } from '../../../../components/Inputs/UFInput'

import { AddressContainer, Heading, Grid } from './styles'

export function Address() {
  return (
    <AddressContainer>
      <Heading>
        <MapPinLine size={22} weight={'regular'} />
        <div>
          <h3>Endereço de entrega</h3>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </Heading>

      <Grid>
        <ZipCodeInput
          name="zipCode"
          hasGridArea
          placeholder="CEP"
          title="CEP deve conter 8 números"
        />

        <DefaultInput name="street" hasGridArea placeholder="Rua" />

        <DefaultInput
          name="number"
          hasGridArea
          type="number"
          placeholder="Número"
        />

        <DefaultInput
          name="complement"
          hasGridArea
          placeholder="Complemento (opcinal)"
        />

        <DefaultInput name="district" hasGridArea placeholder="Bairro" />

        <DefaultInput name="city" hasGridArea placeholder="Cidade" />

        <UFInput
          name="uf"
          hasGridArea
          placeholder="UF"
          title="UF deve conter a sígla do estado como SP/RJ"
        />
      </Grid>
    </AddressContainer>
  )
}
