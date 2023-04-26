import type { NextPage } from 'next'
import React from 'react'
import { FormattedMessage } from 'react-intl'

import Block from 'components/atoms/Block'
import { Layout, Page } from 'components/organisms'

const News: NextPage = () => {
  return (
    <Page title={'NAVIGATION.NEWS'}>
      <Layout>
        <Block title={'NAVIGATION.NEWS'}>
          <FormattedMessage id={'NAVIGATION.NEWS'} />
        </Block>
      </Layout>
    </Page>
  )
}

export default News
