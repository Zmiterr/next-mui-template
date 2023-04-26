import { Stack } from '@mui/material'
import React from 'react'

import { Button } from 'components/atoms/Button'
import { Link } from 'components/atoms/Icons'

const ButtonsDemo = () => {
  return (
    <Stack direction={'row'} gap={'64px'}>
      <Stack gap={'16px'}>
        <Button>Пополнить</Button>
        <Button disabled>Пополнить</Button>
        <Button leftIcon={{ src: Link, viewBox: '0 0 24 24' }}>Пополнить</Button>
        <Button disabled rightIcon={{ src: Link, viewBox: '0 0 24 24' }}>
          Пополнить
        </Button>
      </Stack>
      <Stack gap={'16px'}>
        <Button secondary>Пополнить</Button>
        <Button secondary disabled>
          Пополнить
        </Button>
        <Button secondary leftIcon={{ src: Link, viewBox: '0 0 24 24' }}>
          Пополнить
        </Button>
        <Button secondary disabled rightIcon={{ src: Link, viewBox: '0 0 24 24' }}>
          Пополнить
        </Button>
      </Stack>
    </Stack>
  )
}

export default ButtonsDemo
