import { Stack, Typography } from '@mui/material'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { sidebarSelector } from 'store/sidebar/selectors'
import { toggleSidebar } from 'store/sidebar/slice'

import CompanyLogoLink from 'components/atoms/CompanyLogoLink'
import Icon from 'components/atoms/Icon'
import { ArrowLeft } from 'components/atoms/Icons'
import NavigationMenu from 'components/molecules/NavigationMenu'

import { SidebarWrapper } from './styles'

const Sidebar: FC = () => {
  const dispatch = useAppDispatch()
  const { isOpen: isSidebarOpen } = useAppSelector(sidebarSelector)

  function handleClickToggleButton() {
    dispatch(toggleSidebar())
  }

  return (
    <SidebarWrapper isSidebarOpen={isSidebarOpen}>
      <CompanyLogoLink />
      <NavigationMenu />
      <Stack gap={'15px'} direction={'row'} onClick={handleClickToggleButton}>
        <Icon
          src={ArrowLeft}
          viewBox={'0 0 16 16'}
          htmlColor={'transparent'}
          sx={!isSidebarOpen ? { transform: 'rotate(180deg)' } : {}}
        />
        {isSidebarOpen && (
          <Typography variant={'base1_semibold'} color={'neutrals.grey'}>
            <FormattedMessage id={'COMMON.HIDE'} />
          </Typography>
        )}
      </Stack>
    </SidebarWrapper>
  )
}

export default Sidebar
