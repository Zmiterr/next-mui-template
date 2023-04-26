import type { AppProps } from 'next/app'
import { Router, useRouter } from 'next/router'
import { SnackbarProvider } from 'notistack'
import NProgress from 'nprogress'
import { useEffect } from 'react'
import { Provider, useDispatch, useStore } from 'react-redux'
import { wrapper } from 'store'

import { actions } from 'lib/i18n'
import I18nProvider from 'lib/i18n/I18nProvider'
import ThemeProvider from 'lib/MaterialUIThemeProvider/ThemeProvider'

import 'nprogress/nprogress.css'
import 'styles/globals.scss'

function MyApp({ Component, ...props }: AppProps) {
  const dispatch = useDispatch()
  const { locale } = useRouter()
  const store = useStore()

  useEffect(() => {
    dispatch(actions.setLanguageWithoutLocalStore(locale))
  }, [locale, dispatch])

  Router.events.on('routeChangeStart', () => NProgress.start())
  Router.events.on('routeChangeComplete', () => NProgress.done())
  Router.events.on('routeChangeError', () => NProgress.done())

  return (
    <ThemeProvider>
      <Provider store={store}>
        <I18nProvider>
          <SnackbarProvider>
            <Component {...props} />
          </SnackbarProvider>
        </I18nProvider>
      </Provider>
    </ThemeProvider>
  )
}

export default wrapper.withRedux(MyApp)
