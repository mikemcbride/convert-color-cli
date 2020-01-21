import React from 'react'
import { Box, Color, Text } from 'ink'
import SelectInput from 'ink-select-input'

const SelectFormat = (props) => (
  <Box flexDirection="column">
    <Box marginBottom={1}>
      <Text>Convert <Color green>{props.color}</Color> to which format:</Text>
    </Box>

    <SelectInput items={props.conversionItems} onSelect={props.onFormatSelect} />
  </Box>
)

export default SelectFormat
