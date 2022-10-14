import { LayoutGridContainer } from './styles'

interface Props {
  children: React.ReactNode
}

export function LayoutGrid({ children }: Props): JSX.Element {
  return <LayoutGridContainer>{children}</LayoutGridContainer>
}
