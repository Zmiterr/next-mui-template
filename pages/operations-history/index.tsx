import type { NextPage } from 'next'
import React from 'react'
import { FormattedMessage } from 'react-intl'

import Block from 'components/atoms/Block'
import { Layout, Page } from 'components/organisms'

const OperationsHistory: NextPage = () => {
  return (
    <Page title={'NAVIGATION.OPERATIONS_HISTORY'}>
      <Layout>
        <Block title={'NAVIGATION.OPERATIONS_HISTORY'}>
          <FormattedMessage id={'NAVIGATION.OPERATIONS_HISTORY'} />
        </Block>
      </Layout>
    </Page>
  )
}

export default OperationsHistory
