import React from 'react'
import { APP_LINKS } from 'types/appLinks'

import { Fire, Home, List, People, Question, Wallet } from 'components/atoms/Icons'

export type SidebarSubLink = {
  name: string
  link: string
}

export type SidebarLink = {
  name: string
  href?: string
  icon: React.ElementType
  subMenus?: SidebarSubLink[]
}

export const SIDEBAR_LINKS: SidebarLink[] = [
  {
    name: 'NAVIGATION.MAIN',
    href: APP_LINKS.MAIN,
    icon: Home,
  },
  {
    name: 'NAVIGATION.PARTNERS_NETWORK',
    icon: People,
    subMenus: [
      {
        name: 'NAVIGATION.STATISTICS',
        link: APP_LINKS.STATISTICS,
      },
      {
        name: 'NAVIGATION.STRUCTURE',
        link: APP_LINKS.STRUCTURE,
      },
      {
        name: 'NAVIGATION.SUBSCRIPTIONS',
        link: APP_LINKS.SUBSCRIPTIONS,
      },
    ],
  },
  {
    name: 'NAVIGATION.OPERATIONS_HISTORY',
    href: APP_LINKS.OPERATIONS_HISTORY,
    icon: List,
  },
  {
    name: 'NAVIGATION.WALLET',
    href: APP_LINKS.WALLET,
    icon: Wallet,
  },
  {
    name: 'NAVIGATION.NEWS',
    href: APP_LINKS.NEWS,
    icon: Fire,
  },
  {
    name: 'NAVIGATION.INSTRUCTIONS',
    href: APP_LINKS.INSTRUCTIONS,
    icon: Question,
  },
]
