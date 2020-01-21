import test from 'ava'
import converter from './converter'

// hsl/hex/rgb and hsla/hexa/rgba are all equivalent conversions.
// we are testing that our conversion script works
const hsl = 'hsl(336, 100%, 50%)'
const hex = '#ff0066'
const rgb = 'rgb(255, 0, 102)'
const hsla = 'hsla(336, 100%, 50%, 0.8)'
const hexa = '#ff0066cc'
const rgba = 'rgba(255, 0, 102, 0.8)'

test('converter.isHex correctly identifies if a value is a hex string', t => {
  t.is(converter.isHex(hex), true)
  t.is(converter.isHex(hsl), false)
})

test('converter.isValidColor correctly handles all color types', t => {
  t.is(converter.isValidColor(hex), true)
  t.is(converter.isValidColor(hexa), true)
  t.is(converter.isValidColor(hsl), true)
  t.is(converter.isValidColor(hsla), true)
  t.is(converter.isValidColor(rgb), true)
  t.is(converter.isValidColor(rgba), true)

  // can handle 3 or 6 digit hex values with or without the starting #
  t.is(converter.isValidColor('f06'), true)
  t.is(converter.isValidColor('ff0066'), true)
  t.is(converter.isValidColor('#f06'), true)

  // correctly returns false if it's not a valid color
  t.is(converter.isValidColor('rgb(255, 0, 102, 0.8)'), false)
  t.is(converter.isValidColor('#f060'), false)
  t.is(converter.isValidColor('hsl(500, blue, 60000%)'), false)
})

// test all possible color conversions
test('converts hsl to hex', t => {
  t.is(converter.convertColor(hsl, 'hex'), hex)
})

test('converts hsla to hexa', t => {
  t.is(converter.convertColor(hsla, 'hexa'), hexa)
})

test('converts hsl to rgb', t => {
  t.is(converter.convertColor(hsl, 'rgb'), rgb)
})

test('converts hsla to rgba', t => {
  t.is(converter.convertColor(hsla, 'rgba'), rgba)
})

test('converts hex to hsl', t => {
  t.is(converter.convertColor(hex, 'hsl'), hsl)
})

test('converts hexa to hsla', t => {
  t.is(converter.convertColor(hexa, 'hsla'), hsla)
})

test('converts hex to rgb', t => {
  t.is(converter.convertColor(hex, 'rgb'), rgb)
})

test('converts hexa to rgba', t => {
  t.is(converter.convertColor(hexa, 'rgba'), rgba)
})

test('converts rgb to hex', t => {
  t.is(converter.convertColor(rgb, 'hex'), hex)
})

test('converts rgba to hexa', t => {
  t.is(converter.convertColor(rgba, 'hexa'), hexa)
})

test('converts rgb to hsl', t => {
  t.is(converter.convertColor(rgb, 'hsl'), hsl)
})

test('converts rgba to hsla', t => {
  t.is(converter.convertColor(rgba, 'hsla'), hsla)
})
