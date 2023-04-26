import { Stack } from '@mui/material'
import clsx from 'clsx'
import { useHandleEsc } from 'hooks/useHandleEsc'
import React, { FC, ReactNode } from 'react'

import Icon from 'components/atoms/Icon'
import { Close } from 'components/atoms/Icons'
import ScrollDisabler from 'components/atoms/ScrollDisabler'
import { CloseButtonWrapper, RightPopupWrapper } from 'components/molecules/RightPopup/styles'

type Props = {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  children?: ReactNode | ReactNode[]
}

type CloseButtonProps = {
  handleClick: () => void
}
const CloseButton: FC<CloseButtonProps> = ({ handleClick }) => (
  <CloseButtonWrapper onClick={handleClick}>
    <Icon src={Close} viewBox={'0 0 14 14'} sx={{ width: '14px', height: '14px' }} />
  </CloseButtonWrapper>
)

const RightPopup: FC<Props> = ({ isOpen, setIsOpen, children }) => {
  const closePopup = () => {
    setIsOpen(false)
  }

  useHandleEsc(closePopup)

  return (
    <RightPopupWrapper className={clsx({ active: isOpen })} onClick={closePopup}>
      {isOpen && <ScrollDisabler />}
      <Stack className={clsx('content', { active: isOpen })} onClick={(e) => e.stopPropagation()}>
        <>
          <CloseButton handleClick={closePopup} />
          {children}
        </>
      </Stack>
    </RightPopupWrapper>
  )
}

export default RightPopup
