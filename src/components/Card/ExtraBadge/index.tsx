import { ExtraBadgeContainer } from './styles'

interface Props {
  description: string
}

export function ExtraBadge({ description }: Props) {
  return (
    <ExtraBadgeContainer>
      <span>{description}</span>
    </ExtraBadgeContainer>
  )
}
