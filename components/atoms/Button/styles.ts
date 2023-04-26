import { Box, styled } from '@mui/material'

const NO_IN_THEME_HOVER_COLOR = '#983101'

export const ButtonWrapper = styled(Box, { name: 'button' })(({ theme }) => ({
  position: 'relative',
  boxSizing: 'border-box',
  height: '48px',
  border: '2px solid transparent',
  borderRadius: '8px',
  background: theme.palette.basic.primary500,
  color: theme.palette.neutrals.white,
  boxShadow: `0px 1px 2px rgba(16, 24, 40, 0.05)`,
  transition: '0.3s ease-out',
  cursor: 'pointer',

  '& svg *': {
    fill: 'currentColor',
  },

  '&:hover:not(:disabled)': {
    background: NO_IN_THEME_HOVER_COLOR,
  },

  '&:disabled': {
    opacity: 0.5,
  },

  '&.button_secondary': {
    border: `2px solid ${theme.palette.neutrals.lightGrey_01}`,
    background: theme.palette.common.white,
    color: theme.palette.neutrals.darkGrey_02,
    '&:hover:not(:disabled)': {
      background: theme.palette.neutrals.lightGrey_01,
    },
  },
}))
