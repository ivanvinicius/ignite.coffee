import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import { cups } from '../../utils/cups'

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

export function Card() {
  const cup = cups[8]

  const price = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
    .format(cup.price)
    .replace('R$', '')

  return (
    <CardContainer title={cup.title}>
      <CupImage src={cup.image} alt={cup.title} />
      <ExtraBadgesContainer>
        {cup.extras.map((extra) => (
          <ExtraBadge key={extra} description={extra} />
        ))}
      </ExtraBadgesContainer>
      <Infos>
        <strong>{cup.title}</strong>
        <span>{cup.description}</span>
      </Infos>

      <BuyInfos>
        <Price>
          <span>R$</span>
          <strong>{price}</strong>
        </Price>

        <CartActions>
          <button title="Remover uma unidade do carrinho">
            <Minus size={14} weight="fill" />
          </button>
          <span>5</span>
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
