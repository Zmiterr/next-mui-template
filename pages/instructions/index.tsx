import type { NextPage } from 'next'
import React from 'react'
import { FormattedMessage } from 'react-intl'

import Block from 'components/atoms/Block'
import { Layout, Page } from 'components/organisms'

const Instructions: NextPage = () => {
  return (
    <Page title={'NAVIGATION.INSTRUCTIONS'}>
      <Layout>
        <Block title={'NAVIGATION.INSTRUCTIONS'}>
          <FormattedMessage id={'NAVIGATION.INSTRUCTIONS'} />
        </Block>
      </Layout>
    </Page>
  )
}

export default Instructions
