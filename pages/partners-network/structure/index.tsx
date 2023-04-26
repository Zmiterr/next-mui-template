import type { NextPage } from 'next'
import React from 'react'
import { FormattedMessage } from 'react-intl'

import Block from 'components/atoms/Block'
import { Layout, Page } from 'components/organisms'

const Structure: NextPage = () => {
  return (
    <Page title={'NAVIGATION.STRUCTURE'}>
      <Layout>
        <Block title={'NAVIGATION.STRUCTURE'}>
          <FormattedMessage id={'NAVIGATION.STRUCTURE'} />
        </Block>
      </Layout>
    </Page>
  )
}

export default Structure
