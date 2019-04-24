#!/usr/bin/env node
'use strict'
const meow = require('meow')
const rgbHex = require('rgb-hex')
const hexRgb = require('hex-rgb')

function isHex(str) {
  // optional # at beginning
  // matches a-f, A-F, 0-9 exactly 8, 6, or 3 times
  let hexRegex = /^#?([0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/
  return hexRegex.test(str)
}

const cli = meow(`
  Examples
  # rgb to hex
  $ convert-color 255 154 253
  ff9afd
  $ convert-color 'rgb(40, 42, 54)'
  282a36
  $ convert-color 'rgba(40, 42, 54, 75%)'
  282a36bf
  
  # hex to rgb
  $ convert-color ff9afd
  rgb(255, 154, 253)
  
  # can have a pound sign at beginning
  $ convert-color '#282a36'
  rgb(40, 42, 54)
  
  # works with 8 digit hex codes
  $ convert-color 282a36bf
  rgba(40, 42, 54, 75%)
`)

let val = cli.input.join(' ')
if (isHex(val)) {
  let { red, green, blue, alpha } = hexRgb(val)
  if (alpha !== 1) {
    let pct = `${Math.floor(alpha * 100)}%`
    console.log(`rgba(${red}, ${green}, ${blue}, ${pct})`)
  } else {
    console.log(`rgb(${red}, ${green}, ${blue})`)
  }
} else {
  console.log(rgbHex(val))
}
  