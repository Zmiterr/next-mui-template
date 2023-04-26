import { Box } from '@mui/material'
import clsx from 'clsx'
import React, { FC } from 'react'

import { HeaderMobileMenuButtonWrapper } from 'components/atoms/BurgerButton/styles'

type Props = {
  isOpen: boolean
  onClick: () => void
}
const BurgerButton: FC<Props> = ({ isOpen, onClick }) => (
  <HeaderMobileMenuButtonWrapper
    onClick={onClick}
    className={clsx('headerMobileMenuButtonWrapper', isOpen ? 'opened' : '')}
  >
    <Box component={'span'} className={'menu-row'} />
    <Box component={'span'} className={'menu-row'} />
  </HeaderMobileMenuButtonWrapper>
)

export default BurgerButton
