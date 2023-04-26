import { Email, Link, Password, Person, Phone } from 'components/atoms/Icons'

export const inputsTypes = {
  password: {
    startIconSrc: Password,
    autoCompleteAlias: 'password',
    type: 'password',
    placeholder: 'COMMON.PASSWORD',
  },
  firstName: {
    startIconSrc: Person,
    autoCompleteAlias: 'given-name',
    type: 'text',
    placeholder: 'COMMON.NAME',
  },
  lastName: {
    startIconSrc: Person,
    autoCompleteAlias: 'family-name',
    type: 'text',
    placeholder: 'COMMON.FAMILY_NAME',
  },
  email: {
    startIconSrc: Email,
    autoCompleteAlias: 'email',
    type: 'email',
    placeholder: 'COMMON.E-MAIL',
  },
  phone: {
    startIconSrc: Phone,
    autoCompleteAlias: 'phone',
    type: 'phone-number',
    placeholder: 'COMMON.PHONE_NUMBER',
  },

  confirmPassword: {
    startIconSrc: Password,
    autoCompleteAlias: 'confirm-password',
    type: 'password',
    placeholder: 'COMMON.CONFIRM_PASSWORD',
  },
  code: {
    startIconSrc: Link,
    autoCompleteAlias: 'code',
    type: 'text',
    placeholder: 'COMMON.CODE',
  },
} as const
