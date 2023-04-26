import { Box, ClickAwayListener, Collapse, Stack, Typography } from '@mui/material'
import clsx from 'clsx'
import { SIDEBAR_LINKS, SidebarLink } from 'helpers/constants/sidebarLinks'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { sidebarSelector } from 'store/sidebar/selectors'
import { setOpenedSubmenuName } from 'store/sidebar/slice'

import Icon from 'components/atoms/Icon'
import { Chevron } from 'components/atoms/Icons'
import Link from 'components/atoms/Link'
import {
  NavigationElementWrapper,
  SidebarMenuWrapper,
} from 'components/molecules/NavigationMenu/styles'

interface Props extends SidebarLink {
  isActive: boolean
}

const NavigationElement: FC<Props> = (props) => {
  const { name, icon, href, isActive, subMenus } = props
  const dispatch = useAppDispatch()
  const { isOpen: isSidebarOpen, openedSubmenuName } = useAppSelector(sidebarSelector)

  const { pathname } = useRouter()

  const [showText, setShowText] = useState(isSidebarOpen)

  useEffect(() => {
    if (!isSidebarOpen) {
      setShowText(false)
    } else {
      setTimeout(() => setShowText(true), 300)
    }
  }, [isSidebarOpen])

  useEffect(() => {
    const urlNodes = pathname.split('/')
    const submenuName = urlNodes.length > 2 ? urlNodes[1] : ''

    dispatch(setOpenedSubmenuName(isSidebarOpen ? submenuName : ''))
  }, [dispatch, pathname, isSidebarOpen])

  const toggleSubMenu = (link: string) => {
    const withTrimmedSlash = link.substring(1)
    const submenuName = withTrimmedSlash === openedSubmenuName ? '' : withTrimmedSlash

    dispatch(setOpenedSubmenuName(submenuName))
  }

  const handleClickAway = () => {
    !isSidebarOpen && dispatch(setOpenedSubmenuName(''))
  }

  return (
    <>
      {subMenus ? (
        <NavigationElementWrapper isActive={isActive} onClick={() => toggleSubMenu(name)}>
          <Stack className={clsx('content', { active: isActive })}>
            <Icon src={icon} />
            {showText && (
              <>
                <Stack
                  direction={'row'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  width={'100%'}
                >
                  <Typography variant={'base1_semibold'} color={'neutrals.grey'}>
                    <FormattedMessage id={name} />
                  </Typography>
                  {subMenus && (
                    <Stack
                      justifyContent={'center'}
                      alignItems={'center'}
                      sx={{
                        width: '23px',
                        height: '23px',
                      }}
                    >
                      <Icon
                        src={Chevron}
                        viewBox={'0 0 10 6'}
                        htmlColor={'transparent'}
                        sx={{
                          width: '12px',
                          height: '6px',
                          transform: openedSubmenuName ? 'rotate(180deg)' : 'none',
                        }}
                      />
                    </Stack>
                  )}
                </Stack>
              </>
            )}
          </Stack>
        </NavigationElementWrapper>
      ) : (
        <Link href={href || '/#'}>
          <NavigationElementWrapper isActive={isActive}>
            <Stack className={clsx('content', { active: isActive })}>
              <Icon src={icon} />
              {showText && (
                <>
                  <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    width={'100%'}
                  >
                    <Typography variant={'base1_semibold'} color={'neutrals.grey'}>
                      <FormattedMessage id={name} />
                    </Typography>
                  </Stack>
                </>
              )}
            </Stack>
          </NavigationElementWrapper>
        </Link>
      )}

      {subMenus && (
        <Collapse in={!!(subMenus && openedSubmenuName)} unmountOnExit>
          <Stack direction={'row'} gap={'14px'} className={clsx(!isSidebarOpen && 'subMenu')}>
            <Stack sx={{ width: '25px' }} gap={'6px'} alignItems={'end'}>
              <Box sx={{ width: '2px', height: '80%', bgcolor: 'neutrals.darkGrey_02' }} />
            </Stack>
            <Stack width={'100%'}>
              {subMenus.map((subMenu) => {
                return (
                  <NavigationElementWrapper subLink isActive={isActive} key={subMenu.name}>
                    <ClickAwayListener onClickAway={handleClickAway} touchEvent={false}>
                      <Stack
                        className={clsx('content', { active: pathname === subMenu.link })}
                        onClick={() => {
                          !isSidebarOpen && dispatch(setOpenedSubmenuName(''))
                        }}
                      >
                        <Link href={subMenu.link}>
                          <Typography variant={'base1_semibold'} color={'neutrals.grey'}>
                            <FormattedMessage id={subMenu.name} />
                          </Typography>
                        </Link>
                        {pathname === subMenu.link && (
                          <Icon
                            src={Chevron}
                            viewBox={'0 0 10 6'}
                            htmlColor={'transparent'}
                            sx={{
                              width: '12px',
                              height: '6px',
                              transform: 'rotate(270deg)',
                            }}
                          />
                        )}
                      </Stack>
                    </ClickAwayListener>
                  </NavigationElementWrapper>
                )
              })}
            </Stack>
          </Stack>
        </Collapse>
      )}
    </>
  )
}

const NavigationMenu: FC = () => {
  const { pathname } = useRouter()

  return (
    <SidebarMenuWrapper>
      {SIDEBAR_LINKS.map((link) => (
        <NavigationElement key={link.href} isActive={pathname === link.href} {...link} />
      ))}
    </SidebarMenuWrapper>
  )
}

export default NavigationMenu
