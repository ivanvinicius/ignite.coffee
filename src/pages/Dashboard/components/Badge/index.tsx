import { IconProps } from 'phosphor-react'

import { BadgeContainer, Ollipse } from './styles'

type IconType = React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
>

interface Props {
  bgColor: 'yellowDark' | 'yellow' | 'purple' | 'text'
  icon: IconType
  description: string
}

export function Badge({ bgColor, icon: Icon, description }: Props) {
  return (
    <BadgeContainer>
      <Ollipse bgColor={bgColor}>
        <Icon size={16} weight="fill" />
      </Ollipse>
      <span>{description}</span>
    </BadgeContainer>
  )
}
