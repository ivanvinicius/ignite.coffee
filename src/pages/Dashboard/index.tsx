import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import Banner from '../../assets/banner.svg'
import { LayoutGrid } from '../../components/LayoutGrid'
import { Flat } from '../../components/List/Flat'
import { Scaled } from '../../components/List/Scaled'
import { Card } from '../../components/Card'
import { cups } from '../../utils/cups'
import { useMatchMedia } from '../../hooks/useMatchMedia'

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
  const isMobile = useMatchMedia({ type: 'max', width: 980 })

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
            {isMobile ? (
              <Flat>
                {cups.map((cup) => (
                  <Card key={cup.id} data={cup} />
                ))}
              </Flat>
            ) : (
              <Scaled listLenght={cups.length}>
                {cups.map((cup) => (
                  <Card key={cup.id} data={cup} />
                ))}
              </Scaled>
            )}
          </List>
        </LayoutGrid>
      </CafesContainer>
    </main>
  )
}
