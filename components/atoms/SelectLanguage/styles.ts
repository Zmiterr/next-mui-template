import { Select, styled } from '@mui/material'

export const StyledSelect = styled(Select, { name: 'dropDownWrapper' })(({ theme }) => ({
  background: 'transparent',
  color: theme.palette.neutrals.grey,
  border: 'none',
  boxShadow: 'none',
  height: '100%',
  paddingLeft: 0,

  '& .MuiInputAdornment-positionEnd': {
    marginRight: '8px',
  },
  '.MuiOutlinedInput-input': { padding: 0 },
  '&.Mui-focused': {},
  '& .MuiInputBase-input': {
    color: theme.palette.neutrals.grey,
    transition: 'all 0.3 ease',
  },
  '& .MuiSelect-icon': {
    display: 'none',
  },
  '&:hover': {
    cursor: 'pointer',
    '& .MuiInputBase-input': {
      color: theme.palette.neutrals.lightGrey_01,
    },
    '& svg *': {
      fill: theme.palette.neutrals.lightGrey_01,
    },
  },
}))
