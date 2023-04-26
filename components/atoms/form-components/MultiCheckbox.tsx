import { Checkbox, FormControl, FormControlLabel, FormLabel, Stack } from '@mui/material'
import React, { FC, ReactNode, useEffect, useState } from 'react'
import { Controller, UseFormSetValue } from 'react-hook-form'

import { FormValues } from 'components/organisms/Demo/FormDemo'

import { FormInputProps } from './FormInputProps'

//TODO: better way - get it from generic type incoming props
type Options = {
  value: string
  label: string | ReactNode
}

//TODO: use generic type instead FormValues
interface Props extends FormInputProps {
  options: Options[]
  setValue: UseFormSetValue<FormValues>
}

export const MultiCheckbox: FC<Props> = ({ name, control, setValue, options, label }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const handleSelect = (value: string) => {
    const idx = selectedItems.indexOf(value)

    if (idx !== 1) {
      const remaining = selectedItems.filter((item: string) => item !== value)

      setSelectedItems(remaining)
    } else {
      setSelectedItems((prevItems) => [...prevItems, value])
    }
  }

  useEffect(() => {
    setValue(name, selectedItems)
  }, [selectedItems, name, setValue])

  return (
    <FormControl size={'small'} variant={'outlined'}>
      <FormLabel component="legend">{label}</FormLabel>

      <Stack gap={'12px'}>
        {options.map((option) => {
          return (
            <FormControlLabel
              control={
                <Controller
                  name={name}
                  render={() => (
                    <Checkbox
                      checked={selectedItems.includes(option.value)}
                      onChange={() => handleSelect(option.value)}
                    />
                  )}
                  control={control}
                />
              }
              label={option.label}
              key={option.value}
            />
          )
        })}
      </Stack>
    </FormControl>
  )
}
