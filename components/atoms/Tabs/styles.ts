import { styled } from '@mui/material'

export const TabsWrapper = styled('div', { name: 'tabs' })(({ theme }) => ({
  '& .MuiTabs-flexContainer': {
    gap: '24px',
  },

  '& .MuiTab-root': {
    padding: '8px 10px',
    borderRadius: '4px',
    backgroundColor: theme.palette.neutrals.black,
    transition: 'all 0.3s ease-out',
    '&:hover:not(.Mui-selected)': {
      backgroundColor: theme.palette.shades.shadesBlack_02,
    },
  },

  '& .MuiTab-root.Mui-selected': {
    backgroundColor: theme.palette.basic.sky_blue,
    color: `${theme.palette.neutrals.white}`,
  },

  '.vertical': {
    '& .MuiTab-root': {
      padding: '8px 16px',
      borderRadius: '5px',
      backgroundColor: theme.palette.neutrals.black,
      transition: 'all 0.3s ease-out',
      '&:hover:not(.Mui-selected)': {
        backgroundColor: theme.palette.shades.shadesBlack_02,
      },
    },
    '& .MuiTab-root.Mui-selected': {
      color: `${theme.palette.neutrals.white}`,
    },
  },

  '& .MuiTabs-indicator': {
    display: 'none',
  },
}))
