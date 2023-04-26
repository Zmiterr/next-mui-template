import type { NextPage } from 'next'
import React from 'react'
import { FormattedMessage } from 'react-intl'

import Block from 'components/atoms/Block'
import { Layout, Page } from 'components/organisms'

const Statistics: NextPage = () => {
  return (
    <Page title={'NAVIGATION.STATISTICS'}>
      <Layout>
        <Block title={'NAVIGATION.STATISTICS'}>
          <FormattedMessage id={'NAVIGATION.STATISTICS'} />
        </Block>
      </Layout>
    </Page>
  )
}

export default Statistics
