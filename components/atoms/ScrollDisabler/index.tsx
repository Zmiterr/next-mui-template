import { GlobalStyles } from '@mui/material'
import React from 'react'

const ScrollDisabler = () => {
  const documentWidth = document && document.documentElement.clientWidth
  const windowWidth = window.innerWidth
  const scrollBarWidth = windowWidth - documentWidth

  return (
    <GlobalStyles
      styles={{
        body: {
          overflow: 'hidden',
          webkitOverflowScrolling: 'touch',
          paddingRight: `${scrollBarWidth}px`,
        },
      }}
    />
  )
}

export default ScrollDisabler
