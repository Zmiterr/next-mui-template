import { Box, styled } from '@mui/material'

import { LinkVariants } from 'components/atoms/Link/index'

export const LinkWrapper = styled(Box, { name: 'link' })(({ theme }) => ({
  display: 'flex',
  width: '100%',
  position: 'relative',
  cursor: 'pointer',

  '&.link-rounded': {
    padding: '8px',

    '&:before': {
      content: "''",
      width: 0,
      position: 'absolute',
      transition: 'width 0.5s ease-out',
    },

    '& > *': {
      position: 'relative',

      '&:active': {
        background: theme.palette.neutrals.black,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
      },
    },

    '&:hover': {
      '&:before': {
        content: "''",
        background: theme.palette.neutrals.black,
        opacity: 0.24,
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        borderRadius: '100px',
      },
    },
  },

  '&.link-underlined': {
    background: theme.palette.neutrals.black,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',

    '& a:after': {
      content: "''",
      position: 'absolute',
      top: '80%',
      width: '100%',
      left: 0,
      height: '1px',
      background: theme.palette.neutrals.black,
    },

    '&:active': {
      background: theme.palette.neutrals.black,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      textFillColor: 'transparent',
    },

    '&:hover': {
      background: theme.palette.neutrals.black,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      textFillColor: 'transparent',
    },
  },
}))

export const DisabledLinkWrapper = styled(Box, { name: 'disabledLink' })<{
  variant?: keyof typeof LinkVariants
}>(({ variant }) => ({
  textDecoration: variant === LinkVariants.underlined ? 'underline' : 'none',

  '&:hover': {
    cursor: 'default',
  },
}))
