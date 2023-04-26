import { Stack, styled } from '@mui/material'

import { theme } from 'lib/MaterialUIThemeProvider/ThemeProvider'

export const SidebarMenuWrapper = styled(Stack, { name: 'sidebarMenuWrapper' })(() => ({
  gap: '4px',
  flexGrow: 1,
  '& .subMenu': {
    minWidth: 'fit-content',
    padding: '24px 24px 12px 0px',
    background: theme.palette.neutrals.gray300,
    border: `1px solid ${theme.palette.neutrals.darkGrey_02}`,
    borderRadius: '16px',
  },
}))

export const NavigationElementWrapper = styled(Stack, {
  name: 'navigationElementWrapper',
})<{ subLink?: boolean; isActive: boolean }>(({ theme, subLink, isActive }) => ({
  width: '100%',
  cursor: 'pointer',
  '&.active': {
    position: 'relative',
    zIndex: '1',
    borderRadius: '12px',
    background:
      'radial-gradient(79.62% 240.56% at 50% 118.18%, rgba(99, 100, 102, 0.35) 0%, rgba(124, 126, 128, 0) 100%)',
    backdropFilter: 'blur(16px)',
  },
  '&:before': isActive
    ? {
        content: "''",
        position: 'absolute',
        zIndex: '-1',
        background: theme.palette.basic.sky_blue,
        top: 'calc(50% - 34px/2)',
        left: '-4px',
        height: '34px',
        width: '24px',
        borderRadius: '4px',
      }
    : {},
  '& .content': {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '14px',
    padding: '14px',
    width: '100%',
    '& :before': subLink
      ? {
          content: "''",
          position: 'absolute',
          background: 'url("/images/vector.svg") center no-repeat',
          bottom: '6px',
          left: '-30px',
          height: '22px',
          width: '12px',
          borderRadius: '4px',
        }
      : {},
    '&.active': {
      position: 'relative',
      zIndex: '1',
      borderRadius: '12px',
      background:
        'radial-gradient(79.62% 240.56% at 50% 118.18%, rgba(99, 100, 102, 0.35) 0%, rgba(124, 126, 128, 0) 100%)',
      backdropFilter: 'blur(16px)',
    },
  },
}))
