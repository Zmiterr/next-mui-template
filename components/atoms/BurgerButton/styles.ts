import { Stack, styled } from '@mui/material'

export const HeaderMobileMenuButtonWrapper = styled(Stack, { name: 'headerMobileMenuButton' })(
  ({ theme }) => ({
    gap: '6px',
    width: '24px',
    height: '24px',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',

    '& .menu-row': {
      width: '16px',
      height: '2px',
      backgroundColor: theme.palette.neutrals.grey,
      transition: 'all 0.3s',
    },

    '&.opened :nth-child(even)': {
      transform: 'translateY(-4px) rotate(-45deg)',
    },

    '&.opened :nth-child(odd)': {
      transform: 'translateY(4px) rotate(45deg)',
    },
  }),
)
