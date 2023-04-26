import type { NextPage } from 'next'
import React from 'react'
import { FormattedMessage } from 'react-intl'

import Block from 'components/atoms/Block'
import { Layout, Page } from 'components/organisms'

const PartnersNetwork: NextPage = () => {
  return (
    <Page title={'NAVIGATION.PARTNERS_NETWORK'}>
      <Layout>
        <Block title={'NAVIGATION.PARTNERS_NETWORK'}>
          <FormattedMessage id={'NAVIGATION.PARTNERS_NETWORK'} />
        </Block>
      </Layout>
    </Page>
  )
}

export default PartnersNetwork
