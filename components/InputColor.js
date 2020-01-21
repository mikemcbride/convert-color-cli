const React = require('react')
const { Box, Text } = require('ink')
const { UncontrolledTextInput } = require('ink-text-input')

const InputColor = (props) => (
  <Box>
    <Box marginRight={1}>
      <Text>Enter the color you want to convert:</Text>
    </Box>
    <UncontrolledTextInput onSubmit={props.onInputChange} />
  </Box>
)

module.exports = InputColor
