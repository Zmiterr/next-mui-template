import { styled } from '@mui/material'

import { theme } from 'lib/MaterialUIThemeProvider/ThemeProvider'

const OPENED_SIDEBAR_WIDTH = '340px'
const CLOSED_SIDEBAR_WIDTH = '96px'

export const LayoutWrapper = styled('div', { name: 'layoutWrapper' })<{ isSidebarOpen: boolean }>(
  ({ isSidebarOpen }) => ({
    paddingLeft: isSidebarOpen ? OPENED_SIDEBAR_WIDTH : CLOSED_SIDEBAR_WIDTH,
    backgroundSize: 'contain',
    backgroundOrigin: 'border-box',
    backgroundPosition: 'center 0',
    backgroundRepeat: 'no-repeat',
    overflowX: 'hidden',
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
    },
  }),
)

export const Container = styled('div')(() => ({
  maxWidth: '1160px',
  overflow: 'visible',
  margin: '0 auto',
}))

export const Content = styled('div')(({ theme }) => ({
  padding: '48px 64px 0px',
  height: '-webkit-max-content',

  [theme.breakpoints.down('md')]: {
    paddingLeft: '16px',
    paddingRight: '16px',
  },
}))
