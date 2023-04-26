import { Control } from 'react-hook-form'

import { FormValues } from 'components/organisms/Demo/FormDemo'

//TODO: use generic type instead FormValues
export type FormInputProps = {
  name: keyof FormValues
  control: Control<FormValues>
  label?: string
}
