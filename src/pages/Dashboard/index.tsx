import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import { LayoutGrid } from '../../components/LayoutGrid'
import Banner from '../../assets/banner.svg'

import { DashboardContainer, Brand, Greetings, Badges } from './styles'
import { Badge } from './components/Badge'

export function Dashboard() {
  return (
    <DashboardContainer>
      <LayoutGrid>
        <Brand>
          <Greetings>
            <h1>Encontre o café perfeito para o seu dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora.
            </span>

            <Badges>
              <Badge
                bgColor="yellowDark"
                icon={ShoppingCart}
                description="Compra simples e segura"
              />
              <Badge
                bgColor="yellow"
                icon={Timer}
                description="Entrega rápida e rastreada"
              />
              <Badge
                bgColor="text"
                icon={Package}
                description="Embalagem mantém o café intacto"
              />
              <Badge
                bgColor="purple"
                icon={Coffee}
                description="O café chega fresquinho até você"
              />
            </Badges>
          </Greetings>

          <img src={Banner} />
        </Brand>
      </LayoutGrid>
    </DashboardContainer>
  )
}
