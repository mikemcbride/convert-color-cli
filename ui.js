'use strict'
import React from 'react'
import {Text, Color, Box} from 'ink'
import clipboardy from 'clipboardy'
import converter from './converter'
import SelectFormat from './components/SelectFormat'
import InputColor from './components/InputColor'

class App extends React.Component {
  constructor(props) {
    super(props)

    let initialStage = props.color === null ? 0 : 1

    if (initialStage === 1) {
      if (!converter.isValidColor(props.color)) {
        initialStage = 3
      }
    }

    // state.stage value enumerations:
    // 0 = we need you to give us a color
    // 1 = we have a color and need a format
    // 2 = we have your result
    // 3 = Houston, we have a problem
    this.state = {
      stage: initialStage,
      color: props.color || '',
      outputType: null,
      convertedValue: null,
      errorMessage: 'Invalid color. Run `convert-color --help` for usage.'
    }

    this.handleFormatSelect = this.handleFormatSelect.bind(this)
    this.setColor = this.setColor.bind(this)

    let conversionItems

    if (initialStage === 0) {
      conversionItems = []
    } else {
      conversionItems = converter.getConversionOptionsFromColor(props.color)
    }

    this.state.conversionItems = conversionItems
  }

  handleFormatSelect(item) {
    const output = converter.convertColor(this.state.color, item.value)

    if (output === undefined) {
      // convertColor returns undefined if it cannot convert. this indicates an error.
      let errMsg = `Unable to convert ${this.state.color} to ${item.label}`
      this.setState({
        stage: 3,
        errorMessage: errMsg
      })
    } else {
      // copy the output to the clipboard
      clipboardy.writeSync(output)
      // now we can update state
      this.setState({
        outputType: item.label,
        stage: 2,
        convertedValue: output
      })
    }
  }

  setColor(val) {
    if (converter.isValidColor(val)) {
      this.setState({
        stage: 1,
        color: val,
        conversionItems: converter.getConversionOptionsFromColor(val)
      })
    } else {
      this.setState({
        stage: 3,
        errorMessage: 'Invalid color input'
      })
    }
  }

  render() {
    return (
      <Box marginTop={1} marginBottom={1}>
        {
          this.state.stage === 0 &&
          <InputColor color={this.state.color} onInputChange={this.setColor} />
        }
        {
          this.state.stage === 1 &&
          <SelectFormat color={this.state.color} conversionItems={this.state.conversionItems} onFormatSelect={this.handleFormatSelect} />
        }
        {
          this.state.stage === 2 &&
          <Box flexDirection="column">
            <Box marginBottom={1}>
              <Text >{this.state.color} converted to {this.state.outputType} is <Color green>{this.state.convertedValue}</Color>.</Text>
            </Box>
            <Text>It has been copied to your clipboard.</Text>
          </Box>
        }
        {
          this.state.stage === 3 &&
          <Box>
            <Text>
              <Color red>{this.state.errorMessage}</Color>
            </Text>
          </Box>
        }
      </Box>
    )
  }
}

module.exports = App
