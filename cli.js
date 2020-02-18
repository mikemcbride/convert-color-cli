#!/usr/bin/env node
'use strict'
const meow = require('meow')
const convertColor = require('./convertColor')

const cli = meow(`
  Examples
  # rgb
  $ convert-color 'rgb(40, 42, 54)'

  # alpha values can be % or decimal
  $ convert-color 'rgba(40, 42, 54, 75%)'
  $ convert-color 'rgba(40, 42, 54, 0.75)'

  # hex
  $ convert-color ff9afd

  # can have a pound sign at beginning
  $ convert-color '#282a36'

  # works with 8 digit hex codes (opacity)
  $ convert-color 282a36bf

  # hsl
  $ convert-color 'hsl(336, 100%, 50%)'

  # alpha values can be % or decimal
  $ convert-color 'hsla(336, 100%, 50%, 75%)'
  $ convert-color 'hsla(336, 100%, 50%, 0.75)'

  # you can also omit a color and input it using the interactive input
  $ convert-color

  Enter the color you want to convert:
`)

const initialColor = cli.input.length === 0 ? null : cli.input.join(' ')
module.exports = convertColor(initialColor)
