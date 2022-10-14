import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart as ShoppCart } from 'phosphor-react'

import Logo from '../../assets/logo.svg'
import { LayoutGrid } from '../LayoutGrid'

import { HeaderContainer, Nav, Info, Location, ShoppingCart } from './styles'

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
              <span>Porto Alegre, RS</span>
            </Location>

            <NavLink to="/checkout">
              <ShoppingCart>
                <ShoppCart size={22} weight="fill" />
              </ShoppingCart>
            </NavLink>
          </Info>
        </Nav>
      </LayoutGrid>
    </HeaderContainer>
  )
}
