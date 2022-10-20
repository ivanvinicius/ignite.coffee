import { ReactNode, useEffect, useState } from 'react'
import { CaretCircleLeft, CaretCircleRight } from 'phosphor-react'

import {
  ScaledContainer,
  ButtonsContainer,
  ScrollerButton,
  ScrollerContainer,
  Scroller
} from './styles'

interface Props {
  listLenght: number
  children: ReactNode
}

const GAP_WIDTH = 32
const CARD_WIDTH = 256

export function Scaled({ listLenght, children }: Props) {
  const [scroll, setScroll] = useState(0)
  const [totalScrollerWidth, setTotalScrollerWidth] = useState(0)
  const showingThreeLastCards = CARD_WIDTH * 3 + GAP_WIDTH * 2
  const maxScrollToRight = totalScrollerWidth - showingThreeLastCards

  function handleScrollToLeft() {
    const newScroll = scroll - (CARD_WIDTH + GAP_WIDTH)

    if (newScroll >= 0) {
      setScroll(newScroll)
    }
  }

  function handleScrollToRight() {
    const newScroll = scroll + CARD_WIDTH + GAP_WIDTH

    if (newScroll <= maxScrollToRight) {
      setScroll(newScroll)
    }
  }

  useEffect(() => {
    const gapAmongCards = (listLenght - 1) * GAP_WIDTH
    const sumCardWidht = listLenght * CARD_WIDTH

    setTotalScrollerWidth(gapAmongCards + sumCardWidht)
  }, [listLenght])

  return (
    <ScaledContainer>
      <ButtonsContainer>
        <ScrollerButton
          disabled={scroll === 0}
          title="Fazer a rolagem para a esquerda"
        >
          <CaretCircleLeft
            size={24}
            weight="fill"
            onClick={handleScrollToLeft}
          />
        </ScrollerButton>
        <ScrollerButton
          disabled={scroll === maxScrollToRight}
          title="Fazer a rolagem para a direta"
        >
          <CaretCircleRight
            size={24}
            weight="fill"
            onClick={handleScrollToRight}
          />
        </ScrollerButton>
      </ButtonsContainer>

      <ScrollerContainer>
        <Scroller style={{ marginLeft: `-${scroll}px` }}>{children}</Scroller>
      </ScrollerContainer>
    </ScaledContainer>
  )
}
