import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import Banner from '../../assets/banner.svg'
import { LayoutGrid } from '../../components/LayoutGrid'
import { Flat } from '../../components/List/Flat'
import { Card } from '../../components/Card'
import { cups } from '../../utils/cups'

import { Badge } from './components/Badge'
import {
  Billboard,
  Brand,
  Greetings,
  Badges,
  CafesContainer,
  List
} from './styles'

export function Dashboard() {
  return (
    <main>
      <Billboard>
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
      </Billboard>

      <CafesContainer>
        <LayoutGrid>
          <h3>Nossos Cafés</h3>

          <List>
            <Flat>
              {cups.map((cup) => (
                <Card key={cup.id} data={cup} />
              ))}
            </Flat>
          </List>
        </LayoutGrid>
      </CafesContainer>
    </main>
  )
}
