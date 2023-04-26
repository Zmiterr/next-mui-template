import { SxProps, Theme, Typography } from '@mui/material'
import clsx from 'clsx'
import React, { FC, ReactNode } from 'react'
import { FormattedMessage } from 'react-intl'

import { BadgeWrapper } from 'components/atoms/Badge/styles'

export enum BadgeVariant {
  purple = 'purple',
  green = 'green',
  teal = 'teal',
  gold = 'gold',
  pink = 'pink',
  launchPlan = 'launch',
  businessPlan = 'business',
  vipPlan = 'vip',
}

type Props = {
  children?: ReactNode | ReactNode[]
  title?: string
  badgeVariant: BadgeVariant
  className?: string
  sx?: SxProps<Theme>
}

/**
 * Badge component
 * @component
 * @param props
 *
 * @param { React.ReactNode } [props.children] - children
 * @param { string } [props.title] - formatted message ID
 * @param { BadgeVariant } props.badgeVariant - badge color
 * @param { string } [props.className] - className
 * @param {  SxProps<{}> } [props.sx] - MIU sx prop
 *
 * @return {React.ReactNode} Badge
 */
const Badge: FC<Props> = (props) => {
  const { children, title, badgeVariant, className, sx } = props

  return (
    <BadgeWrapper className={clsx(className, badgeVariant)} sx={sx}>
      <Typography variant={'caption3'}>
        {title && <FormattedMessage id={title} />}
        {children}
      </Typography>
    </BadgeWrapper>
  )
}

export default Badge
