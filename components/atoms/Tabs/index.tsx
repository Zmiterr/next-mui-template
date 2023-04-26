import { Tab, Tabs as MIUTabs, Typography } from '@mui/material'
import { TabsProps } from '@mui/material/Tabs/Tabs'
import clsx from 'clsx'
import React, { FC, ReactNode } from 'react'

import { TabsWrapper } from 'components/atoms/Tabs/styles'

type TabsData = {
  label: ReactNode | string
  value: string | null
}

interface Props extends TabsProps {
  tabsData: TabsData[]
  activeTab: string
  orientation?: 'vertical' | 'horizontal' | undefined
  aria?: string
}

/**
 * HorizontalTabs component
 * @component
 * @param props
 *

 * @param { string } props.activeTab - value property of active tab
 * @param { string } [props.aria = '']  - tabs alias
 * @param { TabsData[] } props.tabsData - tabs orientation
 * @param {  "vertical" | "horizontal" } [props.orientation = "horizontal"] - tabs orientation
 *
 * @return {React.ReactNode} HorizontalTabs
 */
const Tabs: FC<Props> = ({
  activeTab,
  aria = '',
  tabsData = [],
  orientation = 'horizontal',
  ...others
}) => {
  const a11yProps = (value: string | null) => {
    return {
      id: `${aria}-tab-${value}`,
      'aria-controls': `${aria}-tabPanel-${value}`,
    }
  }

  return (
    <TabsWrapper>
      <MIUTabs
        value={activeTab}
        aria-label={`${aria}-tabs`}
        indicatorColor="primary"
        orientation={orientation}
        className={clsx(orientation === 'vertical' ? 'vertical' : '')}
        {...others}
      >
        {tabsData.map((item) => {
          const { value, label } = item

          return (
            <Tab
              {...a11yProps(value)}
              key={value}
              value={value}
              label={<Typography variant={'base2'}>{label}</Typography>}
              component="div"
              disableRipple
            />
          )
        })}
      </MIUTabs>
    </TabsWrapper>
  )
}

export default Tabs
