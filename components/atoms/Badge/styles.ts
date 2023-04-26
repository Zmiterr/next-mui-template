import { Box, styled } from '@mui/material'

export const BadgeWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '4px 6px',
  width: 'fit-content',
  borderRadius: '4px',
  color: theme.palette.neutrals.black,
  '&.purple': {
    backgroundColor: theme.palette.additional.purple,
  },
  '&.green': {
    backgroundColor: theme.palette.additional.green,
  },
  '&.teal': {
    backgroundColor: theme.palette.additional.teal,
  },
  '&.gold': {
    backgroundColor: theme.palette.additional.gold,
  },
  '&.pink': {
    backgroundColor: theme.palette.additional.pink,
  },
  '&.launch': {
    backgroundColor: theme.palette.plans.launch,
  },
  '&.business': {
    backgroundColor: theme.palette.plans.business,
  },
  '&.vip': {
    backgroundColor: theme.palette.plans.vip,
  },
}))
