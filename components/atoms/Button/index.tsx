import { BoxProps, ButtonProps, Stack } from '@mui/material'
import clsx from 'clsx'
import React, { ElementType, FC } from 'react'

import { ButtonWrapper } from 'components/atoms/Button/styles'
import Icon from 'components/atoms/Icon'

type SvgIcon = { src: ElementType; viewBox: string }
type Props = { secondary?: boolean; loading?: boolean; leftIcon?: SvgIcon; rightIcon?: SvgIcon }

/**
 * Button component
 * @component
 * @param props
 *
 * @param { React.ReactNode  } props.children - children
 * @param { boolean } [props.secondary] - button type
 * @param { boolean } [props.loading = false]  - toggle spinner
 * @param { SvgIcon } props.leftIcon - object with icon component and viewBox
 * @param { SvgIcon } props.rightIcon - object with icon component and viewBox
 * @param { string } [props.className] - className
 *
 * @return {React.ReactNode} Button
 */
export const Button: FC<ButtonProps & BoxProps & Props> = ({
  children,
  secondary,
  loading,
  leftIcon,
  rightIcon,
  className,
  ...others
}) => {
  const { type, component, padding, width, disabled } = others

  return (
    <ButtonWrapper
      className={clsx(secondary ? 'button_secondary' : '', className)}
      type={type ?? 'submit'}
      component={component ?? 'button'}
      padding={padding ?? '12px 20px'}
      width={width ?? 'fit-content'}
      disabled={loading || disabled}
      {...others}
    >
      <Stack position={'relative'} direction={'row'} alignItems={'center'} gap={'10px'}>
        {leftIcon && <Icon src={leftIcon.src} viewBox={leftIcon.viewBox} />}
        {children}
        {rightIcon && <Icon src={rightIcon.src} viewBox={rightIcon.viewBox} />}
      </Stack>
    </ButtonWrapper>
  )
}
