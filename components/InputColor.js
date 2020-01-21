import React from 'react'
import { Box, Text } from 'ink'
import { UncontrolledTextInput } from 'ink-text-input'

const InputColor = (props) => (
  <Box>
    <Box marginRight={1}>
      <Text>Enter the color you want to convert:</Text>
    </Box>
    <UncontrolledTextInput onSubmit={props.onInputChange} />
  </Box>
)

export default InputColor
