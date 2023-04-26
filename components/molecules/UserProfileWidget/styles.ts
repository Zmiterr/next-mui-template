import { Stack, styled } from '@mui/material'

export const UserProfileWidgetWrapper = styled(Stack, { name: 'userProfileWidgetWrapper' })(
  ({ theme }) => ({
    gap: '12px',
    flexDirection: 'row',
    '& .interactive-avatar': {
      position: 'relative',
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      background: 'url("/images/demo_avatar.png")',
      backgroundSize: 'contain',
      backgroundColor: theme.palette.basic.sky_blue,
      cursor: 'pointer',
      '& : after': {
        content: "''",
        position: 'absolute',
        display: 'block',
        bottom: '-3px',
        right: '-5px',
        width: '19px',
        height: '19px',
        borderRadius: '50%',
        background: 'url("/images/chevron_bottom.svg") center no-repeat',
        backgroundColor: theme.palette.neutrals.black,
      },
    },
  }),
)
