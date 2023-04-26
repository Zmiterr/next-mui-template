import { styled } from '@mui/material'

import { theme } from 'lib/MaterialUIThemeProvider/ThemeProvider'

type Props = {
  isSidebarOpen: boolean
}
export const SidebarWrapper = styled('aside', { name: 'sidebar' })<Props>(
  ({ isSidebarOpen = true }) => ({
    display: 'flex',
    position: 'fixed',
    left: 0,
    zIndex: 1000,
    flexDirection: 'column',
    gap: '30px',
    flexGrow: '1',
    minHeight: '100vh',
    width: '100%',
    maxWidth: isSidebarOpen ? '340px' : '96px',
    padding: '30px 24px',
    background: theme.palette.gradientBackground.vertical,
    transition: 'all 0.3s ease',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  }),
)
