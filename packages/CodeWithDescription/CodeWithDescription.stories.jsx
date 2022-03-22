import React from 'react'
import { CodeWithDescription } from './src/CodeWithDesription'

export default {
  title: 's-common-ui/Code with description',
  component: CodeWithDescription
}

const Template = (args) => (
    <CodeWithDescription {...args} />
)

export const codeWithDescription = Template.bind({})
codeWithDescription.args = {
  code: 'TS123',
  description: 'Explanation of the code',
  separator: '-'
}
