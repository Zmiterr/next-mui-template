import type { NextPage } from 'next'
import React from 'react'
import { FormattedMessage } from 'react-intl'

import Block from 'components/atoms/Block'
import { Layout, Page } from 'components/organisms'

const Subscriptions: NextPage = () => {
  return (
    <Page title={'NAVIGATION.SUBSCRIPTIONS'}>
      <Layout>
        <Block title={'NAVIGATION.SUBSCRIPTIONS'}>
          <FormattedMessage id={'NAVIGATION.SUBSCRIPTIONS'} />
        </Block>
      </Layout>
    </Page>
  )
}

export default Subscriptions
