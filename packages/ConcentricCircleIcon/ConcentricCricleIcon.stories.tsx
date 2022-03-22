import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import DateRange from '@mui/icons-material/DateRange';
import Info from '@mui/icons-material/Info';
import { ConcentricCircleIcon } from './src/ConcentricCricleIcon'

export default {
  title: 's-common-ui/Concentric Circle',
  component: ConcentricCircleIcon
} as ComponentMeta<typeof ConcentricCircleIcon>

const Template: ComponentStory<typeof ConcentricCircleIcon> = (args) => (
    <ConcentricCircleIcon {...args} />
)

export const dateRangeIcon = Template.bind({})

dateRangeIcon.args = {
  size: 'small',
  innerIcon: (innerWidth?: string | number , innerHeight?: string | number) => (
    <DateRange width={innerWidth} height={innerHeight} />
  ),
  onClick: undefined
}

export const infoIcon = Template.bind({})

infoIcon.args = {
  size: 'small',
  innerIcon: (innerWidth, innerHeight, style) => {
    return <Info width={innerWidth} height={innerHeight} style={style} />
  },
  onClick: undefined
}
