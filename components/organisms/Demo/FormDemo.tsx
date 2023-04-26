import { Paper, Typography } from '@mui/material'
import { getRegistrationValidationRules } from 'helpers/validationRules'
import { useYupValidationResolver } from 'hooks/useYupValidationResolver'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { theme } from 'lib/MaterialUIThemeProvider/ThemeProvider'

import { Button } from 'components/atoms/Button'
import { Dropdown } from 'components/atoms/form-components/Dropdown'
import { MultiCheckbox } from 'components/atoms/form-components/MultiCheckbox'
import { TextInput } from 'components/atoms/form-components/TextInput'

export interface FormValues {
  firstName: string
  lastName: string
  email: string
  phone: string
  password: string
  confirmPassword: string
  code: string
  dropdownValue: string
  acceptTerms: string[]
}

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  code: '',
  dropdownValue: '',
  acceptTerms: [],
}

const checkBoxOptions = [
  {
    label: 'Пользовательского соглашения',
    value: '1',
  },
  {
    label: 'Политики конфиденциальности',
    value: '2',
  },
]

const dropdownOptions = [
  {
    label: 'Пельмешки',
    value: '1',
  },
  {
    label: 'Тефтели',
    value: '2',
  },
]

export const FormDemo = () => {
  const { formatMessage } = useIntl()
  const helperValidationRules = useMemo(
    () => getRegistrationValidationRules(formatMessage),
    [formatMessage],
  )

  const resolver = useYupValidationResolver(helperValidationRules)
  const methods = useForm<FormValues>({
    defaultValues: defaultValues,
    resolver: resolver,
  })
  const { handleSubmit, control, setValue } = methods
  // eslint-disable-next-line no-console
  const onSubmit = (data: FormValues) => console.log(data)

  return (
    <Paper
      style={{
        display: 'grid',
        gridRowGap: '20px',
        padding: '20px',
        margin: '10px 0',
        color: 'white',
        background: theme.palette.common.white,
      }}
    >
      <Typography variant="caption2">Form Demo</Typography>

      <TextInput name="firstName" control={control} variant={'firstName'} setValue={setValue} />
      <TextInput name="lastName" control={control} variant={'lastName'} setValue={setValue} />
      <TextInput name="email" control={control} variant={'email'} setValue={setValue} />
      <TextInput name="phone" control={control} variant={'phone'} setValue={setValue} />
      <TextInput name="password" control={control} variant={'password'} setValue={setValue} />
      <TextInput
        name="confirmPassword"
        control={control}
        variant={'confirmPassword'}
        setValue={setValue}
      />
      <TextInput name="code" control={control} variant={'code'} setValue={setValue} />
      <Dropdown name="dropdownValue" control={control} options={dropdownOptions} />

      <MultiCheckbox
        control={control}
        setValue={setValue}
        name={'acceptTerms'}
        label={'Checkbox Input'}
        options={checkBoxOptions}
      />

      <Button secondary onClick={handleSubmit(onSubmit)}>
        Зарегестрироваться
      </Button>
    </Paper>
  )
}
