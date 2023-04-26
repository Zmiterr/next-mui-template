import Head from 'next/head'
import React, { FC, ReactNode } from 'react'
import { useIntl } from 'react-intl'

type Props = {
  children?: ReactNode
  title?: string
  className?: string
}
//TODO: add information: description, image, keywords, and add to manifest
const Page: FC<Props> = ({ children, title = '' }) => {
  const THEME_COLOR = '#222526'
  const { formatMessage } = useIntl()

  return (
    <div className="page_overflow">
      <Head>
        <title>{`Nimbus | ${formatMessage({ id: title })}`}</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"
        />
        {/*<meta name="keywords" content="Keywords" />*/}
        {/*<meta*/}
        {/*  name="description"*/}
        {/*  content="Join the innovative CrossFi project, combining the stability and liquidity of traditional financial instruments with the security and transparency of Blockchain technology"*/}
        {/*/>*/}
        {/*<meta*/}
        {/*  property="og:image"*/}
        {/*  content="/images/landing/landingMetaImg.png"*/}
        {/*/>*/}

        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="black" />
        <meta name="msapplication-TileColor" content={THEME_COLOR} />
        <meta name="theme-color" content={THEME_COLOR} />
        <meta property="og:title" content="Nimbus" />
        <meta property="og:site_name" content="Nimbus" />
        <meta property="og:url" content="/" />

        <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      </Head>
      {children}
    </div>
  )
}

export default Page
