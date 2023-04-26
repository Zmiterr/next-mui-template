import { SxProps } from '@mui/material'
import SvgIcon from '@mui/material/SvgIcon'
import { Theme } from '@mui/system'
import React, { ElementType, FC } from 'react'

type Props = {
  src: ElementType
  className?: string
  viewBox?: string
  onClick?: (e: MouseEvent) => void
  sx?: SxProps<Theme>
  htmlColor?: string
}

const Icon: FC<Props> = (props) => {
  const { src: IconComponent, ...other } = props

  return <SvgIcon component={IconComponent} {...other} />
}

export default Icon
