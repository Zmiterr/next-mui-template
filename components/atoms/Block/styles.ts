import { Stack, styled } from '@mui/material'

export const BlockWrapper = styled(Stack, { name: 'blockWrapper' })(({ theme }) => ({
  position: 'relative',
  alignItems: 'flex-start',
  gap: '16px',
  padding: '24px',
  borderRadius: '8px',
  background: theme.palette.common.white,
  backgroundBlendMode: 'overlay, overlay, normal',
}))
