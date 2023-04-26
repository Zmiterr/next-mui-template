import { alpha, Stack, styled } from '@mui/material'

export const RightPopupWrapper = styled(Stack, { name: 'rightPopupWrapper' })(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  justifyContent: 'center',
  alignItems: 'center',
  pointerEvents: 'none',
  width: '100vw',
  height: '100vh',
  opacity: 0,
  backgroundColor: alpha(theme.palette.neutrals.darkGrey_02, 0.9),
  zIndex: 10000,
  transition: 'all 0.3s',
  '&.active': {
    opacity: 1,
    pointerEvents: 'initial',
  },
  '& .content': {
    position: 'absolute',
    top: 0,
    right: 0,
    alignItems: 'flex-start',
    width: '100%',
    maxWidth: '600px',
    height: '100vh',
    padding: '40px 64px 80px',
    background: theme.palette.gradientBackground.vertical,
    backgroundBlendMode: 'overlay, overlay, normal',
    transform: 'translateX(600px)',
    transition: 'transform 0.3s',
    '&.active': {
      transform: 'translateX(0)',
    },
  },
}))

export const CloseButtonWrapper = styled(Stack, { name: 'rightPopupWrapper' })(({ theme }) => ({
  position: 'absolute',
  top: '47px',
  left: '-20px',
  justifyContent: 'center',
  alignItems: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: theme.palette.neutrals.black,
  color: theme.palette.neutrals.lightGrey_03,
  cursor: 'pointer',
}))
