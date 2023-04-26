import { useRouter } from 'next/router'
import React from 'react'
import { IntlProvider } from 'react-intl'

import enMessages from './messages/en'
import ruMessages from './messages/ru'

const allMessages = {
  en: enMessages,
  ru: ruMessages,
}

export default function I18nProvider({ children }) {
  const { locale } = useRouter()

  const messages = allMessages[locale]

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  )
}
