import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import { ExtraBadge } from './ExtraBadge'
import {
  CardContainer,
  CupImage,
  ExtraBadgesContainer,
  Infos,
  BuyInfos,
  Price,
  CartActions,
  Cart
} from './styles'

interface Props {
  data: {
    id: string
    image: string
    title: string
    description: string
    price: number
    extras: string[]
  }
}

export function Card({ data }: Props) {
  return (
    <CardContainer title={data.title}>
      <CupImage src={data.image} alt={data.title} />
      <ExtraBadgesContainer>
        {data.extras.map((extra) => (
          <ExtraBadge key={extra} description={extra} />
        ))}
      </ExtraBadgesContainer>
      <Infos>
        <strong>{data.title}</strong>
        <span>{data.description}</span>
      </Infos>

      <BuyInfos>
        <Price>
          <span>R$</span>
          <strong>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })
              .format(data.price)
              .replace('R$', '')}
          </strong>
        </Price>

        <CartActions>
          <button title="Remover uma unidade do carrinho">
            <Minus size={14} weight="fill" />
          </button>
          <span>0</span>
          <button title="Adicionar uma unidade ao carrinho">
            <Plus size={14} weight="fill" />
          </button>
        </CartActions>

        <NavLink to="/checkout" title="Ir para o carrinho">
          <Cart>
            <ShoppingCart size={22} weight="fill" />
          </Cart>
        </NavLink>
      </BuyInfos>
    </CardContainer>
  )
}
