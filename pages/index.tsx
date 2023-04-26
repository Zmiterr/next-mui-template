import type { NextPage } from 'next'
import React from 'react'

import Block from 'components/atoms/Block'
import { Layout, Page } from 'components/organisms'
import Demo from 'components/organisms/Demo'

const Home: NextPage = () => {
  return (
    <Page title={'NAVIGATION.MAIN'}>
      <Layout>
        <Block title={'BALANCE_ACCOUNT'}>
          <Demo />
        </Block>
      </Layout>
    </Page>
  )
}

export default Home
