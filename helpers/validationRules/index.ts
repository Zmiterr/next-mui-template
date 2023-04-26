import { FormatMessage } from 'types'
import * as Yup from 'yup'

import { FormValues } from 'components/organisms/Demo/FormDemo'

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

export const getRegistrationValidationRules = (formatMessage: FormatMessage) =>
  Yup.object<Record<keyof FormValues, Yup.AnySchema>>().shape({
    firstName: Yup.string().required(formatMessage({ id: 'VALIDATION.ERRORS.REQUIRED' })),
    lastName: Yup.string().required(formatMessage({ id: 'VALIDATION.ERRORS.REQUIRED' })),
    email: Yup.string()
      .required(formatMessage({ id: 'VALIDATION.ERRORS.REQUIRED' }))
      .email(formatMessage({ id: 'VALIDATION.ERRORS.WRONG_EMAIL' })),
    phone: Yup.string()
      .matches(phoneRegExp, formatMessage({ id: 'VALIDATION.ERRORS.WRONG_PHONE_NUMBER' }))
      .required(formatMessage({ id: 'VALIDATION.ERRORS.REQUIRED' })),
    dropdownValue: Yup.string().required(formatMessage({ id: 'VALIDATION.ERRORS.REQUIRED' })),
    password: Yup.string()
      .required(formatMessage({ id: 'VALIDATION.ERRORS.REQUIRED' }))
      .min(8, formatMessage({ id: 'VALIDATION.ERRORS.REQUIRED.PASSWORD_LENGTH' })),
    confirmPassword: Yup.string()
      .required(formatMessage({ id: 'VALIDATION.ERRORS.REQUIRED.PASSWORD_CONFIRM' }))
      .oneOf(
        [Yup.ref('password'), null],
        formatMessage({ id: 'VALIDATION.ERRORS.REQUIRED.PASSWORD_NOT_MATCH' }),
      ),
    code: Yup.string().required(formatMessage({ id: 'VALIDATION.ERRORS.REQUIRED' })),
    acceptTerms: Yup.bool().oneOf(
      [true],
      formatMessage({ id: 'VALIDATION.ERRORS.REQUIRED.ACCEPT_TERMS' }),
    ),
  })
