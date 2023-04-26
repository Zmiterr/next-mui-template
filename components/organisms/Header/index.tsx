import { Stack, useMediaQuery, useTheme } from '@mui/material'
import React, { FC, memo, useState } from 'react'

import BurgerButton from 'components/atoms/BurgerButton'
import MessageNotificator from 'components/atoms/MessageNotificator'
import MobileFullScreenPopup from 'components/atoms/MobileFullScreenPopup'
import SelectLanguage from 'components/atoms/SelectLanguage'
import NavigationMenu from 'components/molecules/NavigationMenu'
import UserProfileWidget from 'components/molecules/UserProfileWidget'

import { HeaderWrapper } from './styles'

const Header: FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false)
  const handleClick = () => {
    setIsMobileMenuOpened(!isMobileMenuOpened)
  }

  return (
    <HeaderWrapper>
      <MobileFullScreenPopup
        isOpen={isMobileMenuOpened}
        setIsOpen={setIsMobileMenuOpened}
        sx={{ justifyContent: 'space-between' }}
      >
        <NavigationMenu />
        <UserProfileWidget />
      </MobileFullScreenPopup>
      <Stack direction={'row'} gap={'52px'}>
        <MessageNotificator />
        <SelectLanguage />
      </Stack>
      {isMobile ? (
        <BurgerButton isOpen={isMobileMenuOpened} onClick={handleClick} />
      ) : (
        <UserProfileWidget />
      )}
    </HeaderWrapper>
  )
}

export default memo(Header)
