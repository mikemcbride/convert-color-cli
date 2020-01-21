const React = require('react')
const { Box, Color, Text } = require('ink')
const { default: SelectInput } = require('ink-select-input')

const SelectFormat = (props) => (
  <Box flexDirection="column">
    <Box marginBottom={1}>
      <Text>Convert <Color green>{props.color}</Color> to which format:</Text>
    </Box>

    <SelectInput items={props.conversionItems} onSelect={props.onFormatSelect} />
  </Box>
)

module.exports = SelectFormat
