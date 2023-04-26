import { ClickAwayListener, Stack, SxProps } from '@mui/material'
import { Theme } from '@mui/system'
import clsx from 'clsx'
import React, { FC, memo, ReactNode } from 'react'

import { MobileFullScreenPopupWrapper } from 'components/atoms/MobileFullScreenPopup/styles'
import ScrollDisabler from 'components/atoms/ScrollDisabler'

type Props = {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  children?: ReactNode | ReactNode[]
  classname?: 'string'
  sx: SxProps<Theme>
}

const MobileFullScreenPopup: FC<Props> = memo((props) => {
  const { isOpen = false, setIsOpen, children, classname, sx } = props

  const handleClickAway = (e: MouseEvent | TouchEvent) => {
    const clickedElement = e.target as HTMLElement
    const CLOSED_BUTTON_CLASS = '.headerMobileMenuButtonWrapper'

    if (clickedElement.closest(CLOSED_BUTTON_CLASS)?.matches(CLOSED_BUTTON_CLASS)) return

    setIsOpen(false)
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway} touchEvent={false}>
      <MobileFullScreenPopupWrapper className={clsx(isOpen && 'open')}>
        {isOpen && <ScrollDisabler />}
        <Stack height={'100%'} className={classname} sx={sx}>
          {children}
        </Stack>
      </MobileFullScreenPopupWrapper>
    </ClickAwayListener>
  )
})

export default MobileFullScreenPopup
