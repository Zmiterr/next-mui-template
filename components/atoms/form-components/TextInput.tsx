import { IconButton, InputAdornment, TextField, useTheme } from '@mui/material'
import { inputsTypes } from 'helpers/inputsTypes'
import React, { ElementType, useState } from 'react'
import { Controller, UseFormSetValue } from 'react-hook-form'
import { useIntl } from 'react-intl'

import Icon from 'components/atoms/Icon'
import { Alert, ErrorCross, SuccessTip } from 'components/atoms/Icons'
import { FormValues } from 'components/organisms/Demo/FormDemo'

import { FormInputProps } from './FormInputProps'

//TODO: use generic type instead FormValues
interface Props extends FormInputProps {
  startIconSrc?: ElementType
  endIconSrc?: ElementType
  variant: keyof typeof inputsTypes
  setValue: UseFormSetValue<FormValues>
}

export const TextInput = ({
  name,
  control,
  label,
  startIconSrc,
  endIconSrc,
  variant,
  setValue,
  ...others
}: Props) => {
  const [blurred, setBlurred] = useState(false)

  const currentInputVariant = inputsTypes[variant]

  const theme = useTheme()

  const { formatMessage } = useIntl()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        const clearCurrentField = () => {
          setValue(name, '')
        }
        const getStartAdornment = (startIconSrc: ElementType | undefined) => {
          if (startIconSrc || currentInputVariant?.startIconSrc) {
            return {
              startAdornment: (
                <InputAdornment
                  position="start"
                  sx={{
                    color: error ? 'inherit' : 'neutrals.grey',
                    '& svg *': {
                      fill: 'currentColor',
                    },
                  }}
                >
                  <Icon src={error ? Alert : startIconSrc || currentInputVariant?.startIconSrc} />
                </InputAdornment>
              ),
            }
          }

          return {}
        }

        const getEndAdornment = (endIconSrc: ElementType | undefined) => {
          return {
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{
                  position: 'relative',
                  top: '5px',
                  color: error ? 'inherit' : 'neutrals.grey',
                }}
              >
                {endIconSrc && <Icon src={endIconSrc} />}
                {!!(error && value?.length) && (
                  <IconButton
                    aria-label="clear field"
                    disableRipple
                    onClick={clearCurrentField}
                    sx={{
                      position: 'relative',
                      left: '9px',

                      '& svg *': {
                        fill: theme.palette.warnings.failure,
                      },
                    }}
                  >
                    {<Icon src={ErrorCross} />}
                  </IconButton>
                )}
                {!!(blurred && !error && value?.length) && <Icon src={SuccessTip} />}
              </InputAdornment>
            ),
          }
        }

        const startAdornment = getStartAdornment(startIconSrc)
        const endAdornment = getEndAdornment(endIconSrc)

        const handleBlur = () => {
          setBlurred(true)
        }

        return (
          <TextField
            type={currentInputVariant?.type}
            onBlur={handleBlur}
            autoComplete={currentInputVariant?.autoCompleteAlias || name}
            helperText={error ? error.message : null}
            size="small"
            error={!!error}
            onChange={onChange}
            value={value}
            fullWidth
            label={label}
            variant="outlined"
            placeholder={
              currentInputVariant.placeholder &&
              formatMessage({ id: String(currentInputVariant.placeholder) })
            }
            InputProps={{ ...startAdornment, ...endAdornment }}
            {...others}
          />
        )
      }}
    />
  )
}
