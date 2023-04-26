import clsx from 'clsx'
import NextLink, { LinkProps } from 'next/link'
import React, { ReactNode } from 'react'

import { DisabledLinkWrapper, LinkWrapper } from './styles'

export const enum LinkVariants {
  rounded = 'rounded',
  underlined = 'underlined',
}

export interface ActiveLinkProps extends LinkProps {
  children: ReactNode
  variant?: keyof typeof LinkVariants
  disabled?: boolean
}

const Link = ({ children, variant, disabled, ...props }: ActiveLinkProps) => {
  return disabled ? (
    <DisabledLinkWrapper variant={variant}>{children}</DisabledLinkWrapper>
  ) : (
    <LinkWrapper className={clsx(variant && `link-${variant}`)}>
      <NextLink passHref {...props}>
        {children}
      </NextLink>
    </LinkWrapper>
  )
}

export default Link
