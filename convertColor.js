import clipboardy from 'clipboardy'
import converter from 'convert-color-js'
import c from 'ansi-colors'
import pkg from 'enquirer'
const { prompt } = pkg

function getConversionOptionsFromColor (color) {
  let result
  if (converter.isHex(color)) {
    result = ['rgb', 'hsl' ]
  } else if (converter.isHexa(color)) {
    result = ['rgba', 'hsla' ]
  } else if (converter.isRgb(color)) {
    result = ['hex', 'hsl' ]
  } else if (converter.isRgba(color)) {
    result = ['hexa', 'hsla' ]
  } else if (converter.isHsl(color)) {
    result = ['hex', 'rgb' ]
  } else if (converter.isHsla(color)) {
    result = ['hexa', 'rgba' ]
  }

  return result
}

export default async function convertColor(initialColor) {
  let initialStage = initialColor === null ? 0 : 1

  if (initialStage === 1) {
    if (!converter.isValidColor(initialColor)) {
      console.log(c.red('Invalid color. Run `convert-color --help` for usage.'))
      return
    }
  }

  if (initialStage === 0) {
    // we need to prompt for initial color
    let { color } = await prompt({
      type: 'input',
      name: 'color',
      message: 'What is the color you want to convert?'
    })

    initialColor = color
  }

  if (!converter.isValidColor(initialColor)) {
    console.log(c.red('Invalid color. Please enter a valid hex, rgb, or hsl string. Run `convert-color --help` for usage.'))
    return
  }

  let conversionOptions = getConversionOptionsFromColor(initialColor)
  if (!conversionOptions) {
    console.log(c.red('Unable to get conversion options for color.'))
    return
  }

  let { outputType } = await prompt({
    type: 'select',
    name: 'outputType',
    message: 'Convert to which format:',
    choices: conversionOptions
  })

  const output = converter.convert(initialColor, outputType)

  if (output === undefined) {
    // convertColor returns undefined if it cannot convert. this indicates an error.
    console.log(c.red(`Unable to convert ${initialColor} to ${outputType}`))
    return
  } else {
    // copy the output to the clipboard
    clipboardy.writeSync(output)
    // now we can update state
    console.log(c.green(`Converted value is ${output}. It has been copied to your clipboard.`))
  }
}
