import { Stack } from '@mui/material'
import React, { SyntheticEvent, useState } from 'react'

import Badge, { BadgeVariant } from 'components/atoms/Badge'
import { Button } from 'components/atoms/Button'
import CodeInput from 'components/atoms/form-components/CodeInput'
import Tabs from 'components/atoms/Tabs'
import RightPopup from 'components/molecules/RightPopup'

import ButtonsDemo from './ButtonsDemo'
import { FormDemo } from './FormDemo'

const badge = {
  color: BadgeVariant.green,
  text: 'Текущий ранг',
}
const badge2 = {
  color: BadgeVariant.gold,
  text: 'VIP',
}

const tabs = [
  {
    label: 'Text1',
    value: 'Text1val',
  },
  {
    label: 'Text2',
    value: 'Text2val',
  },
  {
    label: 'Text3',
    value: 'Text4val',
  },
]

const Demo = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].value)

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setActiveTab(newValue)
  }

  const onCompleteCode = (code: string) => {
    // eslint-disable-next-line no-console
    console.log(code)
  }

  const [isOpenRightPopup, setIsOpenRightPopup] = useState(false)

  return (
    <Stack gap={'28px'} width={'100%'}>
      <Button onClick={() => setIsOpenRightPopup(true)}>OpenRightPopup</Button>
      <Badge badgeVariant={badge.color}>{badge.text}</Badge>
      <Badge badgeVariant={badge2.color}>{badge2.text}</Badge>
      <Tabs tabsData={tabs} activeTab={activeTab} onChange={handleChange} aria={'test'} />
      {/*<Tabs*/}
      {/*  tabsData={tabs}*/}
      {/*  activeTab={activeTab}*/}
      {/*  onChange={handleChange}*/}
      {/*  aria={'test-vertical'}*/}
      {/*  orientation={'vertical'}*/}
      {/*/>*/}
      <FormDemo />
      <ButtonsDemo />

      <CodeInput onCompleted={onCompleteCode} />
      <RightPopup isOpen={isOpenRightPopup} setIsOpen={setIsOpenRightPopup}>
        <Stack gap={'60px'}>
          <ButtonsDemo />
          <CodeInput />
        </Stack>
      </RightPopup>
    </Stack>
  )
}

export default Demo
