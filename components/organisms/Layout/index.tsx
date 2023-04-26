import { Stack } from '@mui/material'
import { useAppSelector } from 'hooks/useAppSelector'
import React, { FC, ReactElement } from 'react'
import { sidebarSelector } from 'store/sidebar/selectors'

import { Header, Sidebar } from 'components/organisms/index'

import { Container, Content, LayoutWrapper } from './styles'

type Props = {
  children: ReactElement | ReactElement[]
}

const Layout: FC<Props> = ({ children }) => {
  const { isOpen: isSidebarOpen } = useAppSelector(sidebarSelector)

  return (
    <LayoutWrapper isSidebarOpen={isSidebarOpen}>
      <Sidebar />
      <Header />
      <Container>
        <Stack direction={'row'} minHeight={'100vh'}>
          <Stack width={'100%'}>
            <Content>{children}</Content>
          </Stack>
        </Stack>
      </Container>
    </LayoutWrapper>
  )
}

export default Layout
