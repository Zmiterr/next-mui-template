import { Box, Stack, SxProps, Theme, Typography } from '@mui/material'
import React, { FC, ReactNode } from 'react'
import { FormattedMessage } from 'react-intl'

import { BlockWrapper } from 'components/atoms/Block/styles'

type Props = {
  children: ReactNode | ReactNode[]
  title?: string
  titleAdornment?: ReactNode | ReactNode[]
  loading?: boolean
  className?: string
  sx?: SxProps<Theme>
}

/**
 * Block component
 * @component
 * @param props
 *
 * @param { React.ReactNode } props.children - children
 * @param { string } [props.title] - formatted message ID
 * @param { React.ReactNode } [props.titleAdornment] - component near title
 * @param { boolean } [props.loading = false] - toggle spinner
 * @param { string } [props.className] - className
 * @param {  SxProps<{}> } [props.sx] - MIU sx prop
 *
 * @return {React.ReactNode} Block
 */
const Block: FC<Props> = (props) => {
  const { children, title, titleAdornment, loading, className, sx } = props

  return (
    <BlockWrapper className={className} sx={sx}>
      <Stack direction={'row'} gap={'12px'}>
        <>
          {title && (
            <Typography variant={'title1_bold'}>
              <FormattedMessage id={title} />
            </Typography>
          )}
          {titleAdornment && { titleAdornment }}
        </>
      </Stack>

      <Box sx={{ position: 'relative', width: '100%' }}>
        {children}
        {/*//TODO: spinner*/}
        {loading && <Box>Loading...</Box>}
      </Box>
    </BlockWrapper>
  )
}

export default Block
