import { Box, styled } from '@mui/material'

import { HEADER_HEIGHT } from 'components/organisms/Header/styles'

export const MobileFullScreenPopupWrapper = styled(Box, { name: 'mobileFullScreenPopupWrapper' })(
  ({ theme }) => ({
    position: 'absolute',
    height: `calc(100vh - ${HEADER_HEIGHT})`,
    top: '96px',
    left: '0',
    padding: '24px 24px',
    background: theme.palette.gradientBackground.vertical,
    backgroundBlendMode: 'overlay, overlay, normal',
    width: '100%',
    zIndex: 1000,
    transform: 'translateX(-100%)',
    transition: 'transform 0.15s linear',
    overflowY: 'hidden',

    '@global': {
      body: {
        overflow: 'hidden',
        color: 'red',
      },
    },

    '&.open': {
      transform: 'translateX(0)',
      overflowY: 'auto',
    },
  }),
)
