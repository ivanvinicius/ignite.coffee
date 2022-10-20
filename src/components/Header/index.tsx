import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import Logo from '../../assets/logo.svg'
import { LayoutGrid } from '../LayoutGrid'

import { HeaderContainer, Nav, Info, Location, Cart } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <LayoutGrid>
        <Nav>
          <NavLink to="/">
            <img
              src={Logo}
              alt="Copo de café roxo, ao lado direito texto coffee delivery"
            />
          </NavLink>

          <Info>
            <Location>
              <MapPin size={22} weight="fill" />
              <span>Pouso Redondo, SC</span>
            </Location>

            <NavLink to="/checkout" title="Ir para o carrinho">
              <Cart>
                <ShoppingCart size={22} weight="fill" />
              </Cart>
            </NavLink>
          </Info>
        </Nav>
      </LayoutGrid>
    </HeaderContainer>
  )
}
