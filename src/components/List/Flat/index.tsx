import { FlatContainer } from './styles'

interface Props {
  children: React.ReactNode
}

export function Flat({ children }: Props) {
  return <FlatContainer className="hScrollbar">{children}</FlatContainer>
}
