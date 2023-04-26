import { styled } from '@mui/material'

export const HEADER_HEIGHT = '96px'
export const HeaderWrapper = styled('header', { name: 'header' })(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: HEADER_HEIGHT,
  padding: ' 0 54px',
  background: theme.palette.gradientBackground.horizontal,
  boxShadow: `inset 1px 0px 0px ${theme.palette.neutrals.black}`,
}))
