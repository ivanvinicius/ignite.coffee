import { MapPinLine } from 'phosphor-react'

import { Input } from '../../../../components/Input'

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
        <Input placeholder="CEP" gridArea="cep" type="number" />
        <Input placeholder="Rua" gridArea="street" />
        <Input placeholder="Número" gridArea="number" type="number" />
        <Input placeholder="Complemento (opcional)" gridArea="complement" />
        <Input placeholder="Bairro" gridArea="district" />
        <Input placeholder="Cidade" gridArea="city" />
        <Input placeholder="UF" gridArea="uf" maxLength={2} />
      </Grid>
    </AddressContainer>
  )
}
