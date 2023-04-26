import { InputAdornment, MenuItem, SelectChangeEvent, Typography, useTheme } from '@mui/material'
import { appLanguages } from 'helpers/constants/appLanguages'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { useRouter } from 'next/router'
import React, { memo } from 'react'

import { actions } from 'lib/i18n'

import Icon from 'components/atoms/Icon'
import { Earth } from 'components/atoms/Icons'
import { StyledSelect } from 'components/atoms/SelectLanguage/styles'

const SelectLanguage = memo(() => {
  const dispatch = useAppDispatch()
  const theme = useTheme()

  const router = useRouter()
  const { pathname, query, asPath } = router

  const { lang } = useAppSelector((state) => state.i18n)

  const currentLang = appLanguages.find((item) => item.value === lang)

  const handleChange = async (e: SelectChangeEvent<unknown>) => {
    const clickedLang = e.target.value as string

    dispatch(actions.setLanguage(clickedLang))

    await router.push({ query, pathname }, asPath, { locale: clickedLang })
  }

  const generateSingleOptions = (options: typeof appLanguages) => {
    return options.map((option) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          <Typography variant={'base1_semibold'}>{option.name}</Typography>
        </MenuItem>
      )
    })
  }

  const dropdownOptions = {
    PaperProps: {
      sx: {
        width: 'fit-content',
        border: `2px solid ${theme.palette.neutrals.darkGrey_02}`,
        padding: '2px 6spx',
        '& .MuiMenuItem-root': {
          templateStringSelector: { color: theme.palette.basic.sky_blue },
          '& .Mui-selected': {
            backgroundColor: 'inherit',
            color: theme.palette.neutrals.lightGrey_01,
            '&:hover ': {
              color: theme.palette.neutrals.lightGrey_01,
            },
          },
          padding: 2,
          '&:hover': { background: 'transparent' },
        },
      },
    },
  }

  return (
    <StyledSelect
      onChange={handleChange}
      value={currentLang?.name}
      renderValue={() => currentLang?.shortName}
      startAdornment={
        <InputAdornment position="start">
          <Icon src={Earth} viewBox="0 0 24 24" className={''} />
        </InputAdornment>
      }
      MenuProps={dropdownOptions}
    >
      {generateSingleOptions(appLanguages)}
    </StyledSelect>
  )
})

export default SelectLanguage
