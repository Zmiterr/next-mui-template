import type { NextPage } from 'next'
import React from 'react'
import { FormattedMessage } from 'react-intl'

import Block from 'components/atoms/Block'
import { Layout, Page } from 'components/organisms'

const Wallet: NextPage = () => {
  return (
    <Page title={'NAVIGATION.WALLET'}>
      <Layout>
        <Block title={'NAVIGATION.WALLET'}>
          <FormattedMessage id={'NAVIGATION.WALLET'} />
        </Block>
      </Layout>
    </Page>
  )
}

export default Wallet
