import { FormControl, InputLabel, MenuItem, Select, styled, Typography } from '@mui/material'
import React, { FC, ReactNode } from 'react'
import { Controller } from 'react-hook-form'

import { Chevron } from 'components/atoms/Icons'

import { FormInputProps } from './FormInputProps'

const StyledSelect = styled(Select, { name: 'dropDownWrapper' })(({ theme }) => ({
  justifyContent: 'center',
  color: theme.palette.neutrals.grey,
  border: '1px solid',
  borderColor: theme.palette.neutrals.gray300,
  boxShadow: 'none',

  '&:hover': {
    borderColor: theme.palette.basic.primary500,
  },
  '&.Mui-focused': {
    borderColor: theme.palette.basic.primary500,
  },
  '& p': { color: theme.palette.neutrals.grey, transition: 'color 0.3s ease-out' },
  '& p:hover': { color: theme.palette.neutrals.lightGrey_01 },
  '& .MuiSelect-icon': {
    color: 'inherit',
  },
}))

//TODO: better way - get it from generic type incoming props
type Options = {
  value: string
  label: string | ReactNode
}
interface Props extends FormInputProps {
  options: Options[]
}
export const Dropdown: FC<Props> = ({ name, control, label, options }) => {
  const generateSingleOptions = () => {
    return options.map((option) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          <Typography variant={'base2'}>{option.label}</Typography>
        </MenuItem>
      )
    })
  }

  return (
    <FormControl size={'small'}>
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <StyledSelect onChange={onChange} value={value} IconComponent={Chevron}>
            {generateSingleOptions()}
          </StyledSelect>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  )
}
