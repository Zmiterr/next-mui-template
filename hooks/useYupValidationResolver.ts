import { useCallback } from 'react'
import { ObjectSchema, ValidationError } from 'yup'
import * as Yup from 'yup'

import { FormValues } from 'components/organisms/Demo/FormDemo'

type ErrorFields<T> = Partial<Record<keyof T, string>>
const serializeYupErrors = <T>(error: ValidationError) => {
  return error.inner.reduce((allErrors: ErrorFields<T>, currentError: ValidationError) => {
    const fieldName = currentError.path as keyof T | undefined

    if (fieldName)
      return {
        ...allErrors,
        [fieldName]: {
          type: currentError.type ?? 'validation',
          message: currentError.message,
        },
      }

    return allErrors
  }, {})
}

export const useYupValidationResolver = (
  validationSchema: ObjectSchema<Record<keyof FormValues, Yup.AnySchema>>,
) =>
  useCallback(
    async (data: FormValues) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        })

        return {
          values,
          errors: {},
        }
      } catch (errors) {
        if (errors instanceof ValidationError) {
          return {
            values: {},
            errors: serializeYupErrors(errors),
          }
        } else
          return {
            values: {},
            errors: [],
          }
      }
    },
    [validationSchema],
  )
