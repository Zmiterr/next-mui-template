import { Box, Stack, Typography } from '@mui/material'

import Badge, { BadgeVariant } from 'components/atoms/Badge'
import { UserProfileWidgetWrapper } from 'components/molecules/UserProfileWidget/styles'

const UserProfileWidget = () => (
  <UserProfileWidgetWrapper>
    <Stack>
      <Typography variant={'base1_semibold'}>Михаил Виктор</Typography>
      <Badge badgeVariant={BadgeVariant.businessPlan}>BUSINESS</Badge>
    </Stack>

    <Box className={'interactive-avatar'}>
      <div />
    </Box>
  </UserProfileWidgetWrapper>
)

export default UserProfileWidget
